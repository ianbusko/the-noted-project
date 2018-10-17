import React from 'react';
import PropTypes from 'prop-types';
import Scrolling from '../../Scrolling';
import KeyCodes from '../../keys';

const scrollDirections = {
  [KeyCodes.DOWN_ARROW]: 1,
  [KeyCodes.PAGE_DOWN]: 1,
  [KeyCodes.UP_ARROW]: -1,
  [KeyCodes.PAGE_UP]: -1,
};

const mobileWidth = 1024;

const isAccelerating = (samples) => {
  function average(num) {
    const lastElements = samples.slice(Math.max(samples.length - num, 1));
    const sum = lastElements.reduce((total, element) => total + element, 0);
    return Math.ceil(sum / num);
  }

  const avEnd = average(10);
  const avMiddle = average(70);

  return avEnd >= avMiddle;
};

function withScrollSnapping(WrappedComponent) {
  class WithScrollSnapping extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeIndex: 0,
        upcomingIndex: 0,
        scrolling: false,
        windowHeight: 0,
        disabled: false,
        isMobile: false,
        lastScrollTime: new Date().getTime(),
        scrollSamples: [],
      };

      this.scroller = new Scrolling();
      this.handleContentLoaded = this.handleContentLoaded.bind(this);
      this.handleWindowResize = this.handleWindowResize.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
      this.handleScrollTo = this.handleScrollTo.bind(this);
      this.handleKeys = this.handleKeys.bind(this);
    }

    componentDidMount() {
      this.handleWindowResize();
      window.addEventListener('resize', this.handleWindowResize);
      window.addEventListener('load', this.handleContentLoaded);
      window.addEventListener('keydown', this.handleKeys);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowResize);
      window.removeEventListener('load', this.handleContentLoaded);
      window.removeEventListener('keydown', this.handleKeys);
      document.querySelector('body').style.overflow = '';
    }

    setBodyOverflow() {
      const { isMobile } = this.state;
      document.querySelector('body').style.overflow = isMobile ? '' : 'hidden';
    }

    getScrollIndex(direction) {
      const { maxIndex } = this.props;
      const { activeIndex } = this.state;

      const newIndex = activeIndex + direction;
      if (newIndex < 0) { return 0; }
      if (newIndex > maxIndex) { return maxIndex; }
      return newIndex;
    }

    updateScrollSamples(currentDelta) {
      const { lastScrollTime, scrollSamples } = this.state;
      const currentScrollTime = new Date().getTime();
      scrollSamples.push(currentDelta);
      if (scrollSamples.length > 149) {
        scrollSamples.shift();
      }

      const isTimeElapsed = (currentScrollTime - lastScrollTime) > 200;
      this.setState({
        lastScrollTime: currentScrollTime,
        scrollSamples: isTimeElapsed ? [] : scrollSamples,
      });

      return isTimeElapsed ? [] : scrollSamples;
    }

    handleScroll(e) {
      const {
        scrolling, activeIndex, disabled,
      } = this.state;

      const scrollSamples = this.updateScrollSamples(e.deltaY);

      if (disabled) { return true; }
      if (scrolling || !isAccelerating(scrollSamples)) {
        e.preventDefault();
        return false;
      }

      // 1 = down, -1 = up
      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = this.getScrollIndex(direction);

      if (newIndex !== activeIndex) {
        this.scrollToIndex(newIndex);
      }

      e.preventDefault();
      return false;
    }

    handleKeys(e) {
      const {
        disabled, scrolling, activeIndex,
      } = this.state;

      if (disabled) return true;
      if (!scrollDirections[e.which]) return true;
      if (scrolling) {
        e.preventDefault();
        return false;
      }

      const newIndex = this.getScrollIndex(scrollDirections[e.which]);
      if (newIndex !== activeIndex) {
        this.scrollToIndex(newIndex);
      }

      e.preventDefault();
      return false;
    }

    handleScrollTo(index) {
      this.scrollToIndex(index);
    }

    handleWindowResize() {
      this.setState({
        windowHeight: window.innerHeight,
        disabled: window.innerWidth <= mobileWidth,
        isMobile: window.innerWidth <= mobileWidth,
      }, this.setBodyOverflow);
    }

    handleContentLoaded() {
      const { windowHeight } = this.state;
      const scrollPosition = window.scrollY;
      const newIndex = scrollPosition / windowHeight;
      this.setState({
        activeIndex: newIndex,
      });
      return true;
    }

    scrollToIndex(index) {
      const { maxIndex } = this.props;
      const { windowHeight } = this.state;
      const scrollPosition = index * windowHeight;

      if (index >= maxIndex || index < 0) { return; }

      this.setState({
        scrolling: true,
        upcomingIndex: index,
      });
      this.scroller.scrollTo(scrollPosition).then(() => {
        this.setState({ scrolling: false });
        this.setState({ activeIndex: index });
      });
    }

    render() {
      const { ...passThroughProps } = this.props;
      const { activeIndex, scrolling, upcomingIndex } = this.state;
      return (
        <WrappedComponent
          onScroll={this.handleScroll}
          onScrollTo={this.handleScrollTo}
          onKeyInput={this.handleKeys}
          activeIndex={activeIndex}
          isScrolling={scrolling}
          newIndex={upcomingIndex}
          {...passThroughProps}
        />
      );
    }
  }

  WithScrollSnapping.propTypes = {
    maxIndex: PropTypes.number.isRequired,
  };

  return WithScrollSnapping;
}

export default withScrollSnapping;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrolling from '../../Scrolling';
import KeyCodes from '../../keys';

const scrollDirections = {
  [KeyCodes.DOWN_ARROW]: 1,
  [KeyCodes.PAGE_DOWN]: 1,
  [KeyCodes.UP_ARROW]: -1,
  [KeyCodes.PAGE_UP]: -1,
};

function withScrollSnapping(WrappedComponent) {
  class WithScrollSnapping extends Component {
    constructor(props) {
      super(props);

      this.state = {
        activeIndex: 0,
        upcomingIndex: 0,
        scrolling: false,
        windowHeight: 0,
        disabled: false,
      };
      this.mobileWidth = 1025;
      this.updateWindowHeight = this.updateWindowHeight.bind(this);
      this.scroller = new Scrolling();

      this.handleScroll = this.handleScroll.bind(this);
      this.handleScrollTo = this.handleScrollTo.bind(this);
      this.handleKeys = this.handleKeys.bind(this);
    }

    componentDidMount() {
      this.updateWindowHeight();
      window.addEventListener('resize', this.updateWindowHeight);
      window.addEventListener('keydown', this.handleKeys);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowHeight);
      window.removeEventListener('keydown', this.handleKeys);
    }

    getScrollIndex(direction) {
      const { maxIndex } = this.props;
      const { activeIndex } = this.state;

      const newIndex = activeIndex + direction;
      if (newIndex < 0) { return 0; }
      if (newIndex > maxIndex) { return maxIndex; }
      return newIndex;
    }

    handleScroll(e) {
      const {
        scrolling, activeIndex, disabled,
      } = this.state;
      if (disabled) { return true; }
      if (scrolling) {
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

    scrollToIndex(index) {
      const { windowHeight } = this.state;
      const scrollPosition = index * windowHeight;

      this.setState({
        scrolling: true,
        upcomingIndex: index,
      });
      this.scroller.scrollTo(scrollPosition).then(() => {
        this.setState({ scrolling: false });
        this.setState({ activeIndex: index });
      });
    }

    updateWindowHeight() {
      this.setState({ windowHeight: window.innerHeight });
      this.setState({
        disabled: window.innerWidth < this.mobileWidth,
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

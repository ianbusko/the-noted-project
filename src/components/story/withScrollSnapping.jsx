import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrolling from '../../Scrolling';

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
    }

    componentDidMount() {
      this.updateWindowHeight();
      window.addEventListener('resize', this.updateWindowHeight);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowHeight);
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

      if (newIndex === activeIndex) {
        e.preventDefault();
        return false;
      }

      this.scrollToIndex(newIndex);

      return true;
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

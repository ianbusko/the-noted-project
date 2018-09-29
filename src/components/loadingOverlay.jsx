import React from 'react';
import '../less/loadingOverlay.less';

class LoadingOverlay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = ({
      loaded: false,
      hasIterated: false,
    });

    this.handleWindowLoaded = this.handleWindowLoaded.bind(this);
    this.handleIterationComplete = this.handleIterationComplete.bind(this);
  }

  componentDidMount() {
    const isLoaded = document.readyState === 'complete';
    this.setState({
      loaded: isLoaded,
    });

    if (!isLoaded) {
      window.addEventListener('load', this.handleWindowLoaded);
    } else {
      document.querySelector('body').classList.add('loaded');
    }
    document.querySelector('#loadingIcon').addEventListener('animationiteration', this.handleIterationComplete);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleWindowLoaded);
    document.querySelector('#loadingIcon').removeEventListener('animationiteration', this.handleIterationComplete);
  }

  handleWindowLoaded() {
    this.setState({
      loaded: true,
    });
    document.querySelector('body').classList.add('loaded');
  }

  handleIterationComplete() {
    const { loaded } = this.state;
    this.setState({
      hasIterated: true,
    });
    document.querySelector('#loadingIcon').removeEventListener('animationiteration', this.handleIterationComplete);
    if (loaded) {
      document.querySelector('body').classList.add('loaded');
    }
  }

  render() {
    const { loaded, hasIterated } = this.state;
    return (
      <div className={`loading-overlay ${loaded && hasIterated ? 'loading-overlay--loaded' : 'loading-overlay--loading'}`}>
        <div>
          <svg
            id="loadingIcon"
            height="128"
            width="128"
            x="0px"
            y="0px"
            viewBox="0 0 72 82.7"
            style={{ enableBackground: 'new 0 0 72 82.7' }}
            xmlSpace="preserve"
          >
            <path
              className="st3"
              d="M4.4,47.7c-2.7-7.2-2.8-15.2-0.3-22.6C8.9,11.5,21.7,2.5,36,2.5c0.1,0,0.1,0,0.2,0c0.7,0,1.3-0.6,1.2-1.3
              c0-0.7-0.6-1.1-1.3-1.2H36C20.6,0,7,9.7,2,24.3c-2.7,7.8-2.6,16.4,0.3,24.2c2.8,7.6,8.2,14.1,15.2,18.3l0.6-2.3
              C11.9,60.6,7,54.7,4.4,47.7z"
            />
            <path
              className="st3"
              d="M47.8,2.2c-0.6-0.2-1.2,0.1-1.5,0.7L41.9,15c-5.6-1.6-11.6-0.9-16.8,2c-4.3,2.4-7.6,6.3-9.5,10.9
              c-2.3,5.8-2.1,12.2,0.6,17.7c2.4,4.9,6.4,8.6,11.4,10.7l-1.7,5l-7.8,3.2c0,0,0,0,0,0l-0.6,2.3c0,0,0,0,0,0c2.2,1.3,4.5,2.4,6.9,3.2
              c0.1,0,0.3,0.1,0.4,0.1c0.5,0,1-0.3,1.2-0.8L30.1,57c2,0.6,4,0.8,6,0.8c3.3,0,6.5-0.7,9.6-2.2c1.8-0.9,3.4-1.9,4.8-3.2
              c4.5-3.9,6.8-9.7,5.9-15.6c-0.7-4.5-3.2-9.7-10.5-12.9L43,23l-1.1-0.4l1.8-5.1l8.5-2.5c0.5-0.2,1-0.5,1.2-1s0.2-1.1,0-1.6l-3.5-7
              c0,0,0,0,0,0L47.8,2.2C47.9,2.2,47.9,2.2,47.8,2.2z M28.5,54c-4.4-1.8-7.9-5.1-10-9.4c-2.3-4.7-2.6-9.9-0.9-14.8s5.2-8.9,9.8-11.1
              c4.3-2.1,9.1-2.5,13.7-1.3L39.5,22c-3.3-0.9-6.8-0.5-10,1c-3.5,1.7-6.1,4.7-7.4,8.4c-0.2,0.6,0.1,1.3,0.8,1.6c0.1,0,0.3,0.1,0.4,0.1
              c0.5,0,1-0.3,1.2-0.8c1.1-3.1,3.2-5.5,6.2-7c2.5-1.2,5.4-1.6,8.1-0.9L28.5,54z M48.6,40.2c-3.1,9-10.1,14.5-17.6,14.2L41.2,25
              C47.4,27.2,50.8,34,48.6,40.2z M47.6,13.8l-3,0.9l2-5.7l1.7,3.3C48.6,13,48.3,13.7,47.6,13.8z"
            />
            <path
              className="st3"
              d="M67.8,47c-4.3,12.4-15.5,21.3-28.6,22.5c-2.2,0.2-3.9,2.1-3.9,4.4v5.3l-16.5,1.5c-0.6,0.1-1,0.5-1,1.1
              s0.5,1,1.1,1h35.4c0.6,0,1-0.5,1.1-1c0-0.6-0.4-1.1-1-1.1l-16.5-1.5v-5.3c0-1,0.7-1.8,1.7-1.9C53.4,70.5,65.5,61,70,47.7
              C76.4,29.3,66,9,47.9,2.2l2,3.3C65.5,12.5,73.5,30.5,67.8,47z"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default LoadingOverlay;

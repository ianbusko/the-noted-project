import easing from './Easing';

export default class {
  constructor(options) {
    this.settings = Object.assign({
      easing: easing.easeInOutQuad,
      offset: 0,
      duration: 1000,
    }, options);

    this.start = window.pageYOffset;
    this.distance = 0;
    this.duration = this.settings.duration;
    this.timeStart = 0;
    this.timeElapsed = 0;
  }

  scrollTo(target, instant = false) {
    const distance = this.getDistance(target);
    this.start = window.pageYOffset;
    this.distance = distance - this.start;
    this.duration = instant ? 0 : this.settings.duration;

    // The promise will resolve when the scroll has reached its endpoint.
    // eslint-disable-next-line
    return new Promise((resolve, reject) => {
      requestAnimationFrame((time) => {
        this.timeStart = time;
        this.loop(time, resolve);
      });
    });
  }

  // TODO: consider making this less generic for our application
  getDistance(target) {
    // eslint-disable-next-line
    // debugger;
    // if (typeof target === 'object') {
    // // if the target is a DOM element
    //   return this.settings.offset + target.getBoundingClientRect().top;
    // } if (typeof target === 'string') {
    // // if the target is a selector
    //   return this.settings.offset + document.querySelector(target).getBoundingClientRect().top;
    // }
    // if the target is a distance
    return target + this.settings.offset;
  }

  loop(time, resolve) {
    // eslint-disable-next-line
    this.timeElapsed = time - this.timeStart;
    window.scrollTo(0,
      this.settings.easing(this.timeElapsed, this.start, this.distance, this.duration));

    if (this.timeElapsed < this.duration) {
      requestAnimationFrame(loopTime => this.loop(loopTime, resolve));
    } else {
      this.end(resolve);
    }
  }

  // When the time is up, scroll to the final endpoint and then resolve the promise.
  end(resolve) {
    window.scrollTo(0, this.start + this.distance);
    resolve();
  }
}

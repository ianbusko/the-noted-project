import easing from './Easing';

export default class {
  constructor(options) {
    this.settings = Object.assign({
      easing: easing.easeInOutQuint,
      duration: 1000,
    }, options);

    if (typeof window !== 'undefined') {
      this.start = window.pageYOffset;
      this.distance = 0;
      this.duration = this.settings.duration;
      this.timeStart = 0;
      this.timeElapsed = 0;
    }
  }

  scrollTo(target, instant = false) {
    if (typeof window === 'undefined') { return new Promise().resolve; }
    this.start = window.pageYOffset;
    this.distance = target - this.start;
    this.duration = instant ? 0 : this.settings.duration;

    return new Promise((resolve) => {
      requestAnimationFrame((time) => {
        this.timeStart = time;
        this.loop(time, resolve);
      });
    });
  }

  loop(time, resolve) {
    this.timeElapsed = time - this.timeStart;
    window.scrollTo(0,
      this.settings.easing(this.timeElapsed, this.start, this.distance, this.duration));

    if (this.timeElapsed < this.duration) {
      requestAnimationFrame(loopTime => this.loop(loopTime, resolve));
    } else {
      this.end(resolve);
    }
  }

  end(resolve) {
    window.scrollTo(0, this.start + this.distance);
    resolve();
  }
}

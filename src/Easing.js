export default {
  easeInOutQuint(t, b, c, d) {
    // eslint-disable-next-line
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    // eslint-disable-next-line
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
};

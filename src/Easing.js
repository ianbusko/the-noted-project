export default {
  // borrowed from JQuery UI
  easeInOutQuad(t, b, c, d) {
    let newt = t;
    newt /= d / 2;
    if (newt < 1) return c / 2 * newt * newt + b;
    newt -= 1;
    return -c / 2 * (newt * (newt - 2) - 1) + b;
  },
  easeInOutQuint(t, b, c, d) {
    // eslint-disable-next-line
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    // eslint-disable-next-line
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
};

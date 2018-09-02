export default {
  // borrowed from JQuery UI
  easeInOutQuad(t, b, c, d) {
    let newt = t;
    newt /= d / 2;
    if (newt < 1) return c / 2 * newt * newt + b;
    newt -= 1;
    return -c / 2 * (newt * (newt - 2) - 1) + b;
  },
};

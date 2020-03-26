function multi() {
  const args = [].slice.call(arguments);
  const fn = function () {
    const newArgs = args.concat([].slice.call(arguments));
    return multi.apply(this, newArgs);
  }
  fn.toString = function () {
    return args.reduce(function (a, b) {
      return a + b;
    })
  }
  return fn;
}
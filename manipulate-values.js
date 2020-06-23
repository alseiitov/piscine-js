const filterValues = (cart, fn) =>
  Object.entries(cart)
    .filter((array) => fn(array[1]))
    .reduce((accum, curr) => ((accum[curr[0]] = curr[1]), accum), {});

const mapValues = (cart, fn) =>
  Object.entries(cart)
    .map((array) => [array[0], fn(array[1])])
    .reduce((accum, curr) => ((accum[curr[0]] = curr[1]), accum), {});

const reduceValues = (cart, fn, n) =>
  n === undefined
    ? Object.values(cart).reduce((fn, n) => fn + n, 0)
    : Object.values(cart).reduce((fn, n) => fn + n, n);


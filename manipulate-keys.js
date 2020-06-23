const filterKeys = (cart, fn) =>
  Object.entries(cart)
    .filter((array) => fn(array[0]))
    .reduce((accum, curr) => ((accum[curr[0]] = curr[1]), accum), {});

const mapKeys = (cart, fn) =>
  Object.entries(cart)
    .map((array) => [fn(array[0]), array[1]])
    .reduce((accum, curr) => ((accum[curr[0]] = curr[1]), accum), {});

const reduceKeys = (cart, fn, n) =>
  n === undefined
    ? Object.keys(cart).reduce(fn)
    : Object.keys(cart).reduce(fn, n);

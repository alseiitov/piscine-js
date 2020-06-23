const filterEntries = (cart, fn) =>
  Object.fromEntries(Object.entries(cart).filter(fn));

const mapEntries = (cart, fn) =>
  Object.fromEntries(Object.entries(cart).map(fn));

const reduceEntries = (cart, fn, n) =>
  n === undefined
    ? Object.entries(cart).reduce(fn)
    : Object.entries(cart).reduce(fn, n);

const totalCalories = (cart) =>
  Number(reduceEntries(cart, ((accum, [key, value]) => (accum + (nutritionDB[key].calories * value) / 100)), 0).toFixed(1))

const lowCarbs = (cart) =>
  filterEntries(cart, ([key, value]) => (nutritionDB[key].carbs * value / 100) < 50);

const cartTotal = (cart) =>
  Object.fromEntries(Object.entries(cart).map(getTotal))

const getTotal = ([key, value]) =>
  [key, Object.fromEntries(Object.entries(nutritionDB[key]).map(([k, v]) =>
    ([k, Number(((v * value) / 100).toFixed(3))])))]
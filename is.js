is.num = (foo) => typeof foo == 'number';
is.nan = (foo) => typeof foo != 'number';
is.str = (foo) => typeof foo == 'str';
is.bool = (foo) => typeof foo == 'boolean';
is.undef = (foo) => typeof foo == 'undefined';
is.def = (foo) => typeof foo != 'undefined';
is.arr = (foo) => arr.isArray();
is.truthy = (foo) =>  foo === true;
is.falsy  = (foo) =>  foo === false;
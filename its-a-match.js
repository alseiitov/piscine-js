const normal = /(hi)/;
const begin = /^(hi)/;
const end = /(hi)$/;
const beginEnd = /^(hi).+(hi)$/;

console.log(normal.test('Hi'))
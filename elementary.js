const multiply = (a, b) => a / (1 / b);
const divide = (a, b) => ~~(a * (b ** -1));
const modulo = (a, b) => a - ((divide(a, b))*b);
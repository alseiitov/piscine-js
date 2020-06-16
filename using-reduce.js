const adder = (array, n = 0) =>
    array.reduce(((accumulator, currentValue) => accumulator + currentValue), n)

const sumOrMul = (array, n = 0) =>
    array.reduce(((accumulator, currentValue) => currentValue % 2 == 0 ? accumulator * currentValue : accumulator + currentValue), n)


const funcExec = (array, n) =>
    array.reduce((accumulator, currentValue) => currentValue(accumulator), n)
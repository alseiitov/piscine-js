const adder = (array, n) => {
    if (n == undefined) { n = 0 }
    return array.reduce(((accumulator, currentValue) =>
        accumulator + currentValue), n)
}

const sumOrMul = (array, n) => {
    if (n == undefined) { n = 0 }
    return array.reduce(((accumulator, currentValue) =>
        currentValue % 2 == 0 ? accumulator * currentValue : accumulator + currentValue), n)
}

const funcExec = (array, n) =>
    array.reduce((accumulator, currentValue) =>
        currentValue(accumulator), n)
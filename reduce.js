const reduce = (array, fn, accumulator) => {
    let newArr = array.slice()
    if (accumulator != undefined) {
        newArr.unshift(accumulator)
    }
    for (let i = 1; i < newArr.length; i++) {
        newArr[0] = fn(newArr[0], newArr[i])
    }
    return newArr[0]
}

const reduceRight = (array, fn) => reduce(array.slice().reverse(), fn)

const fold = (array, fn, accumulator) => reduce(array, fn, accumulator)

const foldRight = (array, fn, accumulator) => fold(array.slice().reverse(), fn, accumulator)

function map(array, fn) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i], i, array))
    }
    return newArray
}

function flatMap(array, fn) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flatMap(array[i], fn)
        }
        newArray.push(fn(array[i], i, array))
    }
    return newArray
}
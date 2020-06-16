const filter = (array, fn) => {
    let filtered = []
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i, array)) {
            filtered.push(array[i])
        }
    }
    return filtered
}

const reject = (array, fn) => {
    let rejected = []
    for (let i = 0; i < array.length; i++) {
        if (!fn(array[i], i, array)) {
            rejected.push(array[i])
        }
    }
    return rejected
}

const partition = (array, fn) => [filter(array, fn), reject(array, fn)] 

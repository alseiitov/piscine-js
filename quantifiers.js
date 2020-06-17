const every = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        if (!fn(array[i])) {
            return false
        }
    }
    return true
}

const some = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return true
        }
    }
    return false
}

const none = (array, fn) => !some(array,fn)
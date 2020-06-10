function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

function lastIndexOf(array, value) {
    let last = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            last = i
        }
    }
    return last
}

function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }
    return false
}
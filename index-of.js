function indexOf(array, value, index) {
    if (!index) {
        index = 0
    }

    for (let i = index; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

function lastIndexOf(array, value, index) {
    if (!index) {
        index = 0
    }
    
    for (let i = array.length - 1; i >= index; i--) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

function includes(array, value, index) {
    if (!index) {
        index = 0
    }
    
    for (let i = index; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }
    return false
}

console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))

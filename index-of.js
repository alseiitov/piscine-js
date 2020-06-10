function indexOf(array, value, index) {
    for (i = index; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

function lastIndexOf(array, value, index) {
    for (let i = array.length - 1; i >= index; i--) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

function includes(array, value, index) {
    for (let i = index; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }
    return false
}

let t = "a"
console.log(indexOf([t, 0, 0, t], t, 1))
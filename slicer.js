function slice(array, start, end) {
    let slice = [];
    if (!start) {
        start = 0;
    }
    if (start < 0) {
        start = array.length + start
    }
    if (!end) {
        end = array.length 
    }
    if (end < 0) {
        end = array.length + end
    }
    for (let i = start; i < end; i++) {
        slice.push(array[i])
    }
    if (typeof array === 'string') {
        return slice.join('')
    }
    return slice
}

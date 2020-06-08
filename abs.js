const isPositive = (num) => num > 0;
function abs(num) {
    if (isPositive(num)) {
        return num
    } else {
        return -num
    }
}
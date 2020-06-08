const isPositive = (num) => num > 0;
function abs(num) {
    if (isPositive(num)) {
        return num
    }
    if (!isPositive(num)&& num != 0)  {
        return -num
    }
    return num
}
console.log(abs(0))
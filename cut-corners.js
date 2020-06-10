function round(num) {
    if (num > 0) {
        if (num % 1 >= 0.5) {
            return num - (num % 1) + 1
        }
        return num - (num % 1)
    } else {
        if (num % 1 <= -0.5) {
            return num - (num % 1) - 1
        }
        return num - (num % 1)
    }
}

function ceil(num) {
    if (round(num) >= num) {
        return round(num)
    } else {
        return round(num) + 1
    }
}

function floor(num) {
    if (round(num) <= num) {
        return round(num)
    } else {
        return round(num) - 1
    }
}

function trunc(num) {
    return num - num % 1
}

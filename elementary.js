function multiply(a, b) {
    let res = 0;
    let isNegative = false;
    if (b < 0) {
        isNegative = true;
        b = -b
    }
    while (b > 0) {
        if ((b & 1) != 0) {
            res += a
        };
        a = a << 1;
        b = b >> 1;
    }
    if (isNegative) {
        return -res
    }
    return res
}

function divide(a, b) {
    if (b == 0) {
        return 0
    }
    let sign = ((a < 0) ^ (b < 0)) ? -1 : 1;
    a = Math.abs(a);
    b = Math.abs(b);

    let quotient = 0;
    while (a >= b) {
        a -= b;
        ++quotient;
    }
    return multiply(sign, quotient)
}

const modulo = (a, b) => a - (multiply(divide(a, b), b));
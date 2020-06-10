function pyramid(str, max) {
    return recusrion(str, max, max).trimRight()
}

function recusrion(str, num, max) {
    if (num <= 0) {
        return ''
    }
    let line = '';
    for (let i = 0; i < num; i++) {
        line += str
    }
    while (line.length < max) {
        line = ' ' + line
    }
    for (let i = 1; i < num; i++) {
        line += str
    }
    return recusrion(str, num - 1, max) + line + '\n'
}

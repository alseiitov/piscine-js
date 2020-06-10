function triangle(str, num) {
    return recusrion(str, num).trimRight()
}

function recusrion(str, num) {
    if (num <= 0) {
        return ''
    }
    let line = '';
    for (let i = 0; i < num; i++) {
        line += str
    }
    return recusrion(str, num - 1) + line + '\n'
}

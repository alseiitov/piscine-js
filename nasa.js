function nasa(num) {
    let res = '';
    for (let i = 1; i <= num; i++) {
        let temp = ''
        if (i % 3 == 0) {
            temp = 'NA'
        }
        if (i % 5 == 0) {
            temp = 'SA'
        }
        if (i % 3 == 0 && i % 5 == 0) {
            temp = 'NASA'
        }
        if (temp == '') {
            temp = i.toString()
        }
        res += temp
        if (i != num) {
            res += ' '
        }
    }
    return res
}

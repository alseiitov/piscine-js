function split(str, separator) {
    let lenStr = str.length;
    let lenSepatator = separator.length;
    let words = [];
    let separatorCount = 0;
    let word = ''
    if (separator != '') {
        for (let i = 0; i < lenStr; i++) {
            word += String(str[i]);
            let lenWord = word.length;
            if (lenWord => lenSepatator) {
                if (word.slice(lenWord - lenSepatator, lenWord) == separator) {
                    separatorCount++
                    words.push(word.slice(0, lenWord - lenSepatator))
                    word = ''
                }
            }
            if (i == lenStr - 1 && word != '') {
                words.push(word)
            }
        }
    }

    if (separatorCount == words.length) {
        words.push('')
        return words
    }
    return words
}


function join(array, separator) {
    if (separator === '') {
        separator = ','
    }
    let res = ''
    for (let i = 0; i < array.length; i++) {
        res += array[i]
        if (i != array.length - 1) {
            res += separator
        }
    }
    return res
}

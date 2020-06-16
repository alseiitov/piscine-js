const longWords = array => array.every(element => element.length > 5);

const oneLongWord = array => array.some(element => element.length >= 10);

const noLongWords = array => !array.some(element => element.length >= 7)
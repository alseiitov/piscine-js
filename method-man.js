const words = (str) => str.split(' ');
const sentence = (array) => array.join(' ');
const yell = (str) => str.toUpperCase();
const whisper = (str) => '*' + str.toLowerCase() + '*';

function capitalize(str) {
    let arr = [...str]
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            arr[i] = arr[i].toUpperCase()
        } else {
            arr[i] = arr[i].toLowerCase()
        }
    }
    return arr.join('')
}
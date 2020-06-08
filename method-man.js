const words = (str) => str.split(' ');
const sentence = (array) => array.join(' ');
const yell = (str) => str.toUpperCase();
const whisper = (str) => '*' + str.toLowerCase() + '*';
const capitalize = (str) => str[0].toUpperCase()+str.slice(1)
import { styles } from './data.js'

export { pimp }

function pimp() {
    let button = document.getElementsByClassName('button')[0]
    let len = button.classList.length
    let toAddOrDelete = styles[len - 1]

    if (len === 1) {
        button.textContent = 'pimp my style'
    }
 
    if (len === styles.length && button.textContent != 'Unpimp my style') {
        button.textContent = 'Unpimp my style'
        button.classList.add(toAddOrDelete)
        return
    }
    if (button.textContent === 'pimp my style') {
        button.classList.add(toAddOrDelete)
    } 
    if (button.textContent === 'Unpimp my style') {
        button.classList.remove(button.classList[len-1])
    } 

}

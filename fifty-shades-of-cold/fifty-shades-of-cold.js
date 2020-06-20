import { colors } from './data.js'

export { generateClasses, generateColdShades, choseShade }

function generateClasses() {
    let style = document.createElement('style')
    colors.forEach(color => {
        style.textContent += (`.${color}{background: ${color};}\n`)
    });
    document.head.appendChild(style)
}

function generateColdShades() {
    colors.forEach(color => {
        if ((/(aqua|blue|turquoise|green|cyan|navy|purple)/).test(color)) {
            let div = document.createElement('div')
            div.classList.add(color)
            div.textContent = color
            document.body.appendChild(div)
        }
    });
}

function choseShade(shade) {
    let allCards = Array.from(document.getElementsByTagName('div'))
    allCards.forEach(div => {
        div.classList.remove(div.classList[div.classList.length - 1])
        div.classList.add(shade)
    })
}


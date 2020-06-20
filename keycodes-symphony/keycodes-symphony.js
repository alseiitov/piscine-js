export { compose }

function compose() {
    document.addEventListener('keydown', event => {
        if ((/^([a-z]| )$/).test(event.key)) {
            let newDiv = document.createElement('div')
            let color = (event.keyCode - 65) * 9
            newDiv.className = 'note'
            newDiv.textContent = event.key
            newDiv.style.background = `rgb(${color}, ${color}, ${color})`
            document.body.appendChild(newDiv)
        }
        if (event.key === 'Backspace') {
            document.body.lastChild.remove()
        }
        if (event.key === 'Escape') {
            document.body.textContent = ''
        }
    })
}

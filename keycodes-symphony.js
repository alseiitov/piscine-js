export { compose }

function compose() {
    document.addEventListener('keyup', event => {
        if ((/^([a-z]| )$/).test(event.key)) {
            let newDiv = document.createElement('div')
            newDiv.className = 'note'
            newDiv.innerText = event.key
            let color = event.keyCode - 65
            newDiv.style.background = `rgb(${color}, ${color}, ${color})`
            document.body.appendChild(newDiv)
        }
        if (event.key === 'Backspace') {
            document.body.lastChild.remove()
        }
        if (event.key === 'Escape') {
            document.body.innerText = ''
        }
    })
}

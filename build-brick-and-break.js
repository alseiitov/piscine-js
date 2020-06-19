export { build, repair, destroy }

window.setInterval(build, 100);

let counter = 0;

function build(bricksNum) {
    for (let i = 1; i <= bricksNum; i++) {
        counter++
        let newDiv;

        newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'brick')
        newDiv.setAttribute('id', `brick-${i}`)

        if (counter === 2) {
            newDiv.setAttribute('foundation', 'true')
        }
        if (counter === 3) {
            counter = 0
        }

        document.body.appendChild(newDiv)
    }
}

function repair(id) {
    let toRepair = document.getElementById(id)
    if (toRepair.hasAttribute('foundation')) {
        toRepair.setAttribute('repair', 'in progress')
    } else {
        toRepair.setAttribute('repair', 'true')
    }
}

function destroy() {
    document.body.lastChild.remove()
}
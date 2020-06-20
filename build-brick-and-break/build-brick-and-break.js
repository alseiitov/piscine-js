export { build, repair, destroy, addBrick }


var counter = 0;
var interval;

function build(bricksNum) {
    interval = setInterval(addBrick, 100, bricksNum)
}

function addBrick(bricksNum) {
    let n = document.getElementsByClassName('brick').length

    if (n === bricksNum) {
        clearInterval(interval)
        return
    }

    counter++
    let newDiv;
    newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'brick')
    newDiv.setAttribute('id', `brick-${n + 1}`)

    if (counter === 2) {
        newDiv.dataset.foundation = true
    }
    if (counter === 3) {
        counter = 0
    }
    document.body.appendChild(newDiv)
}

function repair(...ids) {
    ids.forEach(id => {
        let toRepair = document.getElementById(id)
        if (toRepair.dataset.foundation) {
            toRepair.dataset.repaired = 'in progress'
        } else {
            toRepair.dataset.repaired = true
        }
    })
}

function destroy() {
    var bricks = document.getElementsByClassName('brick')
    var lastBrick = bricks[bricks.length - 1];
    lastBrick.parentNode.removeChild(lastBrick);
}

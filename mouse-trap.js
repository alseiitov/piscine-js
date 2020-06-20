export { createCircle, moveCircle, setBox }

function createCircle() {
    document.addEventListener('click', event => {
        let circle = document.createElement('div')
        circle.className = 'circle'
        circle.style.background = 'white'
        circle.style.left = `${event.clientX - 25}px`
        circle.style.top = `${event.clientY - 25}px`
        document.body.appendChild(circle)
    })
}


function moveCircle() {
    document.addEventListener('mousemove', event => {
        let circles = document.getElementsByClassName('circle')
        let circle = circles[circles.length - 1]

        let boxes = document.getElementsByClassName('box')
        let box = boxes[boxes.length - 1]

        let rect = box.getBoundingClientRect()

        let x = event.clientX - 25
        let y = event.clientY - 25
        let rectX1 = rect.x
        let rectX2 = rect.x + rect.width
        let rectY1 = rect.y
        let rectY2 = rect.y + rect.height

        if ((x - 1 > rectX1) &&
            (x + 1 + 50 < rectX2) &&
            (y - 1 > rectY1) &&
            (y + 1 + 50 < rectY2) &&
            (circle.style.background.startsWith('white'))
        ) {
            circle.style.background = 'purple'
        }

        if (circle.style.background.startsWith('purple')) {
            if (x - 1 < rectX1) {
                circle.style.left = `${rectX1 + 1}px`
            } else {
                circle.style.left = `${x}px`
            }
            if (x + 1 + 50 > rectX2) {
                circle.style.left = `${rectX2 - 1 - 50}px`
            }

            if (y - 1 < rectY1) {
                circle.style.top = `${rectY1 + 1}px`
            } else {
                circle.style.top = `${y}px`
            }
            if (y + 1 + 50 > rectY2) {
                circle.style.top = `${rectY2 - 1 - 50}px`
            }
        } else {
            circle.style.left = `${x}px`
            circle.style.top = `${y}px`
        }
    })
}


function setBox() {
    let box = document.createElement('div')
    box.className = 'box'
    document.body.appendChild(box)
}

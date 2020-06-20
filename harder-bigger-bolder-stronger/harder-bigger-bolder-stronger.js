export { generateLetters }

function generateLetters() {
    for (let i = 1; i <= 120; i++) {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let text = chars[Math.floor(Math.random()*25)]
        let fontWeight = 300
        let n = 120 / i
        if (n < 3) {
            fontWeight += 100
        }
        if (n < 1.5) {
            fontWeight += 200
        }
        let newDiv = document.createElement('div')
        newDiv.textContent = text
        newDiv.style.fontSize = `${i+10}px`
        newDiv.style.fontWeight = fontWeight
        document.body.appendChild(newDiv)
    }
}

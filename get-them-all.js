export { getArchitects, getClassical, getActive, getBonannoPisano }

function getArchitects() {
    var arr = []
    arr.push(Array.from(document.getElementsByTagName("a")))
    arr.push(Array.from(document.getElementsByTagName("span")))

    return arr
}

function getClassical() {
    var arr = []
    arr.push(Array.from(document.querySelectorAll('a.classical')))
    arr.push(Array.from(document.querySelectorAll('a:not(.classical)')))

    return arr
}

function getActive() {
    var arr = []
    arr.push(Array.from(document.getElementsByClassName('classical active')))
    arr.push(Array.from(document.querySelectorAll('.classical:not(.active)')))

    return arr
}

function getBonannoPisano() {
    var arr = []
    arr.push(document.getElementById("BonannoPisano"))
    arr.push(Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)')))

    return arr
}
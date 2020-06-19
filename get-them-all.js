export { getArchitects, getClassical, getActive, getBonannoPisano }

function getArchitects() {
    return [].push(Array.from(document.getElementsByTagName('a')))
        .push(Array.from(document.getElementsByTagName('span')))
}


function getClassical() {
    return [].push(Array.from(document.querySelectorAll('a.classical')))
        .push(Array.from(document.querySelectorAll('a:not(.classical)')))

}

function getActive() {
    return [].push(Array.from(document.getElementsByTagName('classical active')))
        .push(Array.from(document.getElementsByTagName('.classical:not(.active)')))

}

function getBonannoPisano() {
    return [].push(document.getElementById('BonannoPisano'))
        .push(Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)')))
}

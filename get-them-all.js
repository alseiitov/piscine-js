export { getArchitects, getClassical, getActive, getBonannoPisano }

const getArchitects = () =>
    [].push(document.getElementsByTagName('a'))
        .push(document.getElementsByTagName('span'))

const getClassical = () =>
    [].push(document.getElementsByClassName('classical'))
        .push(document.querySelectorAll('a:not(.classical)'))

const getActive = () =>
    [].push(document.getElementsByTagName('classical active'))
        .push(document.getElementsByTagName('a.classical:not(.active)'))

const getBonannoPisano = () =>
    [].push(document.getElementById('BonannoPisano'))
        .push(document.querySelectorAll('a:not(#BonannoPisano)'))


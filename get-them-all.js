export { getArchitects, getClassical, getActive, getBonannoPisano }

const getArchitects = () =>
    [].push(Array.from(document.getElementsByTagName('a')))
        .push(Array.from(document.getElementsByTagName('span')))

const getClassical = () =>
    [].push(Array.from(document.querySelectorAll('a.classical')))
        .push(Array.from(document.querySelectorAll('a:not(.classical)')))

const getActive = () =>
    [].push(Array.from(document.getElementsByTagName('classical active')))
        .push(Array.from(document.getElementsByTagName('.classical:not(.active)')))

const getBonannoPisano = () =>
    [].push(document.getElementById('BonannoPisano'))
        .push(Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)')))


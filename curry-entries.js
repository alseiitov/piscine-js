const defaultCurry = obj1 => obj2 => {
    let res = {}
    Object.entries(obj1).forEach(([key, value]) => { res[key] = value });
    Object.entries(obj2).forEach(([key, value]) => { res[key] = value });
    return res
}

const mapCurry = fn => obj =>
    Object.fromEntries(Object.entries(obj).map(fn))

const reduceCurry = fn => (obj, n) =>
    Object.entries(obj).reduce(fn, n)

const filterCurry = fn => obj =>
    Object.fromEntries(Object.entries(obj).filter(fn))

const forceUsers = filterCurry(([_, value]) => value.isForceUser)

const reduceScore = (obj, initial) =>
    reduceCurry((acc, [_, value]) => acc + value.shootingScore + value.pilotingScore)(forceUsers(obj), initial)

const filterForce = (obj) =>
    filterCurry(([_, value]) => value.shootingScore >= 80)(forceUsers(obj))

const mapAverage = (obj) => {
    let res = {}
    Object.entries(obj).map(([key, value]) => {
        res[key] = Object.assign(value)
        res[key].averageScore = (value.shootingScore + value.pilotingScore) / 2
    })
    return res
}
    

const replica = (...objs) => {
    let res = {}
    objs.forEach((obj) => {
        Object.entries(obj).forEach(([key, value]) => {
            if (isObject(value) && isObject(res[key])) {
                res[key] = replica(res[key], value)
            } else {
                res[key] = value
            }
        })
    })
    return res
}

const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';


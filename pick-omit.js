const pick = (obj, keys) => Object.entries(obj)
    .filter(arr => Array.isArray(keys) ? keys.includes(arr[0]) : keys === arr[0])
    .reduce((accum, curr) => (accum[curr[0]] = curr[1], accum), {})

const omit = (obj, keys) => Object.entries(obj)
    .filter(arr => Array.isArray(keys) ? !keys.includes(arr[0]) : keys != arr[0])
    .reduce((accum, curr) => (accum[curr[0]] = curr[1], accum), {})

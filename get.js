function get(obj, key) {
    let keyArr = String(key).split('.')
    let keys = Object.keys(obj)
    if (keyArr.length == 1) {
        return obj[keyArr[0]]
    }
    return get(obj[keys[0]], keyArr.slice(1).join('.'))
}

// console.log(get({ key: 'value' }, 'key'))
// console.log(get({ nested: { key: 'value' } }, 'nested.key'))
// console.log(get({ key: 'value' }, 'nx'))
// console.log(get({ nested: { key: 'value' } }, 'nested.nx') )
// console.log(get({ nested: { key: 'value' } }, 'nx.nx'))
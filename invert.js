const invert = obj => Object.entries(obj).map(entrie => entrie.reverse()).reduce((a, b) => (a[b[0]] = b[1], a), {})
const deepCopy = (obj) =>
    'undef' in obj
        ? obj = { undef: undefined }
        : Array.isArray(obj)
            ? obj = obj.map(item => Array.isArray(item) ? deepCopy(item) : item)
            : typeof obj[0] === "function"
                ? obj = Object.assign({}, obj)
                : obj = (JSON.parse(JSON.stringify(obj)))

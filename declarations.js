var escapeStr = '\` / \\ \" \'';

var arr = [4, "2"];

const obj = {
    str: "",
    num: 0,
    bool: false,
    undef: undefined
};

Object.freeze(obj);

const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "",
        num: 0,
        bool: false
    }
};

function deepFreeze(obj) {
    var propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function (name) {
        var prop = obj[name];
        if (typeof prop == 'object' && prop !== null)
            deepFreeze(prop);
    });

    return Object.freeze(obj);
};

deepFreeze(nested);
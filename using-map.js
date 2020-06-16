const citiesOnly = objArray =>
    objArray.map(obj => obj.city);


const upperCasingStates = array => array.map(string => toUpper(string));

const toUpper = string => string.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());


const farenheitToCelsius = array =>
    array.map(string => string.replace(/F/g, 'C').replace(/-?[0-9]+/g, match => fahrennheitToCelsius(match)));

const fahrennheitToCelsius = (F) =>
    Math.floor((Number(F) - 32) / 1.8);


const trimTemp = objArray =>
    objArray.map(obj =>
        Object.entries(obj).map(entrie => {
            if (entrie[0] == 'temperature') { entrie[1] = entrie[1].replace(/ /g, '') };
            return entrie
        }).reduce((a, b) => (a[b[0]] = b[1], a), {})
    )

const tempForecasts = objArray =>
    objArray.map(obj =>
        fahrennheitToCelsius(obj.temperature.replace(/ /g, '').split('°F')[0]) + '°Celsius in ' + obj.city + ', ' + toUpper(obj.state)
    )


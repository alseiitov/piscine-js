const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
};

clone1 = Object.assign({}, person);
clone2 = Object.assign({}, person);

var samePerson = Object.assign({}, person);

person.age++;
person.country = 'FR';
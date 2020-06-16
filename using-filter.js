const filterShortStateName = array => array.filter(word => word.length < 7);

const filterStartVowel = array => array.filter(word => (/^[aeiouAEIOU]/).test(word))

const filter5Vowels = array => array.filter(word => word.match(/[aeiouAEIOU]/g).length >= 5)

const filter1DistinctVowel = array => array.filter(word => {
    let arr = word.match(/[aeiouAEIOU]/g)
    return arr.every(v => v.toLowerCase() === arr[0].toLowerCase())
})

const multiFilter = array => array.filter(obj => (
    obj.capital.length > 7 &&
    filterStartVowel([obj.name]).length == 0 &&
    (/[aeiouAEIOU]/g).test(obj.tag) == true &&
    obj.region != 'South'
    )
)
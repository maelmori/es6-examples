// ARRAY.FROM
// From a string
let testArray = Array.from('any string')
console.log(testArray)

// From a SET
testArray = Array.from(new Set(['foo', 123, new Date()]))
console.log(testArray)

// From a Generator
function * idGenerator () {
  let index = 0
  while (index < 3) {
    yield index++
  }
}
testArray = Array.from(idGenerator())
console.log(testArray)

// From an arrow function mapping the values
// It's actually like Array.map
testArray = Array.from([1, 2, 3], x => x + x)
console.log(testArray)

// Generating a secuence
testArray = Array.from({length: 5}, (v, k) => k)
console.log(testArray)

// Array.of
testArray = Array.of(1, new Date(), this)
console.log(testArray)

// Array.keys, values & entries
console.log(Array.from([ 'a', 'b' ].keys()))
//console.log(Array.from([ 'a', 'b' ].values()))
console.log(Array.from([ 'a', 'b' ].entries()))

// Array.find()

console.log([6, -5, 8].find(x => x < 0))
console.log([6, -5, 8].findIndex(x => x < 0))
// It ignores HOLES
console.log([6, , , -5, 8].findIndex(x => x < 0))

// "in" operator
// Careful, it's about keys, not values!
console.log(2 in ['uno', 1, new Date()])
console.log('property' in {property: 'value'})
console.log('toString' in {})

// We've seen this before, but I want to stop just a minute here.
// Why not to use for... in
const test = [1, 2, 3, 4, 5, 6]
// Don't actually do this ir RL
for (let i in test) {
  // Issue #1: "i" is a string, not an integer. There are no 0, 1, 2 or 3 values
  // for i, but "0", "1", "2" and so on. So if you're going to calculate
  // to find if you're next to the endo of the array, i < test.length
  // can give you unexpected results

  // Issue #2: if somewhere else you modify your array methods via array.Prototype
  // the new methods will apear as elements of the array.

  // Issue #3: In some circunstances, this code can look in arbitrary order!

  console.log(test[i])
}

// We also have foreach
test.forEach(function (element) {
  // But here we can't use break or return statements!
  console.log(element)
})

// So, what should I use instead?
// The shining brand new for... of loop
for (let value of test) {
  console.log(value)
}
// You'll avoid the for... in pitfalls, and you can use break and return

// But, wait! I want the keys!!!
// all right then!
for (let key of test.keys()) {
  console.log(test[key])
}
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
// console.log(Array.from([ 'a', 'b' ].values()))
console.log(Array.from([ 'a', 'b' ].entries()))

// Array.find()

console.log([6, -5, 8].find(x => x < 0))
console.log([6, -5, 8].findIndex(x => x < 0))
// It ignores HOLES
console.log([6,,, -5, 8].findIndex(x => x < 0))

// "in" operator
console.log(2 in ['uno', 2, new Date()])
console.log('property' in {property: 'value'})
console.log('toString' in {})

// It allows to expand itself in situations where several arguments are expected
function test (one, two, three) {
  console.log(one, two, three)
}

let testArray = [0, 1, 2]
test(testArray) // Wrong
test(...testArray) // Right!

// Works with generators

function * idGenerator () {
  for (let i = 0; i < 3; i++) {
    yield i
  }
}
test(...idGenerator())

// Works with arrays!
console.log([...testArray, 3, 4, 5])

// Works with destructuring
let [a, b, c, ...tail] = [9, 8, 7, 6, 5, 4]
console.log(a, b, c) // 9 8 7
console.log(tail) // 6, 5, 4

// Advanced use: generating a sequence
testArray = [...Array(10).keys()]
console.log(testArray)

// "Classical" appliances
// PUSH
let arr1 = [0, 1, 2]
let arr2 = [3, 4, 5]
arr1.push(...arr2)
console.log(arr1)

// Class constructors
let dateArgs = [2016, 11, 26, 10, 45]
// May come from a database or whatever
var d = new Date(...dateArgs)
console.log(d)

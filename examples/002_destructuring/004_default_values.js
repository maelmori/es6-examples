// http://es6-features.org/#FailSoftDestructuring

const list = [ 7, 42 ]
const [ a = 1, b = 2, c = 3, d ] = list

console.log(a) // 7
console.log(b) // 42
console.log(c) // 3
console.log(d) // undefined

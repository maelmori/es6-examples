// Easiest example

const [a, b] = [1, 2]
console.log(a, b)

// use in functions
function foo () {
  return [12, 'test value']
}
const [id, value] = foo()
console.log(id, value)

// Ignoring some return values
function bar () {
  return [12, 'test value', 38, 16]
}
const [var1, , , var4] = bar()
console.log(var1, var4)

// Clearing regular expressions
const url = 'https://developer.mozilla.org/en-US/Web/JavaScript'
const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)
const[ , protocol, , ] = parsedURL

console.log(protocol)

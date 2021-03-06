// Passing more than one argument

// ES5
function myES5Concat () {
  var result = ''
  var separator = arguments[0]
  for (var i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator
  }
  return result
}
console.log(myES5Concat(' ', 'Talking', 'bout', 'my', 'generation'))

// ES6
function myES6concat (separator, ...chunks) {
  let result = ''
  for (let value of chunks) {
    result += value + separator
  }
  return result
}
console.log(myES6concat(' ', 'Talking', 'bout', 'my', 'generation'))

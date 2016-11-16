// AVOID using arguments object
// is an optimitation killer and it's use is strongly discouraged
// Also, it doesn't exist in arrow functions
// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// ES5
function myES5Concat () {
  var result = ''
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result
}
console.log(myES5Concat('Talking ', 'bout ', 'my ', 'generation '))

// ES6
function myES6concat (...chunks) {
  let result = ''
  for (let i = 0; i < chunks.length; i++) {
    result += chunks[i]
  }
  return result
}
console.log(myES6concat('Talking ', 'bout ', 'my ', 'generation '))

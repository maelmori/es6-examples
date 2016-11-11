// hoisting has been standarized in ES6
// thus it worked in ES5 in the mayority of browsers

var x = 10
if (x === 10) {
  function weirdFunctionHere () {
    return 'You actually shouldn\’t be doing this'
  }
  console.log(weirdFunctionHere())
}
console.log(weirdFunctionHere())

// What about defining the function as a variable?
if (x === 10) {
  var anotherWeirdFunctionBitesTheDust = function () {
    return 'This is my last warning!'
  }
  console.log(anotherWeirdFunctionBitesTheDust())
}
console.log(anotherWeirdFunctionBitesTheDust())

// And using let??
if (x === 10) {
  let theMotherOfTheLambThisIsCrazy = function () {
    return 'I told you!'
  }
  console.log(theMotherOfTheLambThisIsCrazy())
}
// Fails, at last!
console.log(theMotherOfTheLambThisIsCrazy())

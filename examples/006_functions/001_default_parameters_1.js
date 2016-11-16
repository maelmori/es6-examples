// Very intuitive usage here:
function myAddition (a, b = 10) {
  return a + b
}
console.log(myAddition(5))
// Unlike Python, default values are evaluated in the function call
// Knowing that, we can play arround with this
function myWeirdAddition (a, b = (a < 5) ? 5 : 10) {
  return a + b
}
console.log(myWeirdAddition(3))
console.log(myWeirdAddition(15))

// Block Scope of LET
// ES5

function test_es5 (x) {
  if (x === 10) {
    var y = 1
  }
  console.log(y)
}
test_es5(10)

// ES6
function test_es6 (x) {
  if (x === 10) {
    let y = 1
  }
  console.log(y) // Fail!
}
test_es6(10)

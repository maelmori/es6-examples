//  hoisting

// Functions are hoisted
// No problems with this code
test()
function test () {
  console.log('testing')
}

// Class declarations are not!
new Shape(1)

// ReferenceError!!
class Shape {
  constructor (id) {
    this.id = id
  }
}

// Also, class definition body are executed in strict mode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// Take care about variable definitions and eval executions

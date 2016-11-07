//  hoisting

// Functions are hoisted
// No problems with this code
test()
function test () {
  console.log('testing')
}

// Class declarations are not!
new Shape(1)
// Badabooooom!!
class Shape {
  constructor (id) {
    this.id = id
  }
}

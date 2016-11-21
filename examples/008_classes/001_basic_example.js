// The classical ES5 class

function ES5Shape (id, x, y) {
  this.id = id
  this.move(x, y)
}
ES5Shape.prototype.move = function (x, y) {
  this.x = x
  this.y = y
}

var s2 = new ES5Shape(1, 10, 30)
s2.move(1, 20)

// The ES6 Class equivalent

class Shape {
  constructor (id, x, y) {
    this.id = id
    this.move(x, y)
  }
  move (x, y) {
    this.x = x
    this.y = y
  }
}

const s = new Shape(1, 10, 30)
s.move(1, 20)

// Don't be fooled by the syntax
// It's almost the same function object as always

console.log(typeof Shape) // surprise!

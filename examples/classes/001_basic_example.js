// Base class

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

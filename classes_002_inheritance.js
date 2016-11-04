// Inheritance

class Shape {
  constructor (id, x, y) {
    this.id = id
    this.move(x, y)
  }
  move (x, y) {
    this.x = x
    this.y = y
  }

  toString () {
    return 'Generic shape ' + this.id
  }
}

class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
    super(id, x, y)
    this.width = width
    this.height = height
  }
  toString () {
    return 'Rectangle ' + this.id
  }
}

class Circle extends Shape {
  constructor (id, x, y, radius) {
    super(id, x, y)
    this.radius = radius
  }
  toString () {
    return 'Circle ' + this.id
  }
}

const rectangle = new Rectangle(1, 10, 30, 10, 10)
const circle = new Circle(2, 40, 30, 10)
// Accessing to a parent's method
rectangle.move(19, 55)
circle.move(10, 0)
// Accessing to a overwritted method
console.log(rectangle.toString())
console.log(circle.toString())

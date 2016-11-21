// Static members

class Rectangle {
  constructor (width, height, x, y) {
    // Static variable
    if (Rectangle.idAutoincrement === undefined) {
      Rectangle.idAutoincrement = 1
    }
    // We tipically will do this with generators
    // But works as an example
    this.id = Rectangle.idAutoincrement ++
    this.width = width
    this.height = height
    this.x = x
    this.y = y
  }
  get position () {
    return [ [ this.x, this.x + this.width ], [ this.y, this.y + this.height ] ]
  }
  // Static methods
  static comparePositions (p1, p2) {
    const r1 = p1[0] < p2[0] ? p1 : p2
    const r2 = p1[0] < p2[0] ? p2 : p1
    return r1[1] > r2[0] || r1[0] === r2[0]
  }
  static collide (r1, r2) {
    const r1position = r1.position
    const r2position = r2.position
    return Rectangle.comparePositions(r1position[0], r2position[0]) &&
      Rectangle.comparePositions(r1position[1], r2position[1])
  }

}

function checkCollisions (r1, r2) {
  if (Rectangle.collide(r1, r2)) {
    console.log(`Rectangle ${r1.id} and Rectangle ${r2.id} collide!!`)
  } else {
    console.log('wo wo wo')
  }
}

const rectangle1 = new Rectangle(10, 5, 5, 10)
const rectangle2 = new Rectangle(10, 5, 1, 10)

checkCollisions(rectangle1, rectangle2)

const rectangle3 = new Rectangle(10, 5, 150, 10)
const rectangle4 = new Rectangle(10, 5, 1, 10)

checkCollisions(rectangle3, rectangle4)

// Static members

class Rectangle {
  constructor (width, height, x, y) {
    // Static variable
    if (Rectangle.id_autoincrement === undefined) {
      Rectangle.id_autoincrement = 1
    }
    this.id = Rectangle.id_autoincrement ++
    this.width = width
    this.height = height
    this.x = x
    this.y = y
  }
  get position () {
    return [ [ this.x, this.x + this.width ], [ this.y, this.y + this.height ] ]
  }
  // Static methods
  static compare_positions (p1, p2) {
    let r1 = p1[0] < p2[0] ? p1 : p2
    let r2 = p1[0] < p2[0] ? p2 : p1
    return r1[1] > r2[0] || r1[0] === r2[0]
  }
  static collide (r1, r2) {
    let r1position = r1.position
    let r2position = r2.position
    return Rectangle.compare_positions(r1position[0], r2position[0]) &&
      Rectangle.compare_positions(r1position[1], r2position[1])
  }

}

function check_collisions (r1, r2) {
  if (Rectangle.collide(r1, r2)) {
    console.log(`Rectangle ${r1.id} and Rectangle ${r2.id} collide!!`)
  } else {
    console.log('wo wo wo')
  }
}

const rectangle1 = new Rectangle(10, 5, 5, 10)
const rectangle2 = new Rectangle(10, 5, 1, 10)

check_collisions(rectangle1, rectangle2)

const rectangle3 = new Rectangle(10, 5, 150, 10)
const rectangle4 = new Rectangle(10, 5, 1, 10)

check_collisions(rectangle3, rectangle4)

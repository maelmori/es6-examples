// Prototyping members
// The getters are LAZY: dey do not calculate their values until they are called

class Shape {
  constructor (id, width, height) {
    this.id = id
    this.width = width
    this.height = height
  }
  get area () {
    return this.width * this.height
  }
}
const s = new Shape(1, 10, 5)
console.log(s.area)

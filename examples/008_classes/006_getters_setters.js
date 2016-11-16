// Prototyping members
// The getters are LAZY: dey do not calculate their values until they are called

class Shape {
  constructor (id, width, height) {
    this.id = id
    this.width = width
    this.height = height
  }

  set doubleSize (double) {
    this.width = this.width * 2
    this.height = this.height * 2
  }

  // Be VERY careful with something like this
  // set id (id) {
  //   this.id = id
  // }
  // Circular callings in the air ♩♩♩ dubi dubi du ♫ ♫...

  get area () {
    return this.width * this.height
  }
}
const s = new Shape(1, 10, 5)
console.log(s.area)
s.doubleSize = true
console.log(s.area)

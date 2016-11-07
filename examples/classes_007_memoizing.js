// Caching getters with memoization
// https://en.wikipedia.org/wiki/Memoization
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
// https://medium.com/front-end-hacking/today-i-learned-memoization-with-pure-functions-in-es6-33a4765518b5#.fqnuv753l
class Shape {
  constructor (id, width, height) {
    this.id = id
    this.width = width
    this.height = height
  }
  get area () {
    if (this.area_cache === undefined) {
      this.area_cache = {}
    }
    let stringifiedArgs = JSON.stringify([this.width, this.height])
    if (this.area_cache[stringifiedArgs] === undefined) {
      this.area_cache[stringifiedArgs] = this.width * this.height
      console.log('Executing long and memory expensive method')
    }
    return this.area_cache[stringifiedArgs]
  }
}
const s = new Shape(1, 10, 5)
console.log(s.area)
console.log(s.area)
console.log(s.area)
console.log(s.area)
console.log(s.area)
console.log(s.area)
s.width = 3
console.log(s.area)
console.log(s.area)
console.log(s.area)
console.log(s.area)

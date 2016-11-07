// We can build our own iterable objects
// ES5 flavour:

const iterableStuff = {
  elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  currentElement: 0,
  [Symbol.iterator]: function * () {
    while (this.currentElement < this.elements.length) {
      yield this.elements[this.currentElement ++]
    }
  }
}

for (let value of iterableStuff) {
  console.log(value)
}

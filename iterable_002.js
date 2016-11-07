// We can build our own iterable objects
// ES5 flavour:

const iterableStuff = {
  elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  current_element: 0,
  [Symbol.iterator]: function * () {
    while (this.current_element < this.elements.length) {
      yield this.elements[this.current_element ++]
    }
  }
}

for (let value of iterableStuff) {
  console.log(value)
}

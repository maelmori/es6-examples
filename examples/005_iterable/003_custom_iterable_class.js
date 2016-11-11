// And now, using ES6 class sintax

class IterableStuff {
  constructor () {
    this.elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.currentElement = 0
  }

  [Symbol.iterator] () {
    // Use of closures
    let currentElement = this.currentElement
    const elements = this.elements

    return {
      next: () => ({
        done: !(currentElement in elements),
        value: elements[currentElement++]
      })
    }
  }
}

const iterableStuff = new IterableStuff()
for (let value of iterableStuff) {
  console.log(value)
}

// And now, using ES6 class sintax

class IterableStuff {
  constructor () {
    this.elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.current_element = 0
  }

  [Symbol.iterator] () {
    // Use of closures
    let current_element = this.current_element
    const elements = this.elements

    return {
      next: () => ({
        done: !(current_element in elements),
        value: elements[current_element++]
      })
    }
  }
}

const iterableStuff = new IterableStuff()
for (let value of iterableStuff) {
  console.log(value)
}

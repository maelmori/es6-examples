// Use of next, value, and done

function * idGenerator () {
  let index = 0
  while (index < 3) {
    yield index++
  }
}

const gen = idGenerator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

console.log(gen.next().done)

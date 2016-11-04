// https://davidwalsh.name/es6-generators
// Use of next, value, and done

function * talking_bout_my_generation () {
  let index = 0
  while (index < 3) {
    yield index++
  }
}

const gen = talking_bout_my_generation()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

console.log(gen.next().done)

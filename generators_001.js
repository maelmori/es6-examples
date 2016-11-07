// https://davidwalsh.name/es6-generators
// Easies example

function * talking_bout_my_generation () {
  yield 'Talking'
  yield 'Bout\''
  yield 'My'
  yield 'Generation!!!'
}

const gen = talking_bout_my_generation()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().done)

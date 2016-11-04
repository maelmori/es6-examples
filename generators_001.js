// https://davidwalsh.name/es6-generators
// Easies example

function * talking_bout_my_generation () {
  yield 'Hola'
  console.log('checkpoint 1')
  yield 'Qué'
  console.log('checkpoint 2')
  yield 'Tal'
}

const gen = talking_bout_my_generation()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

console.log(gen.next().done)

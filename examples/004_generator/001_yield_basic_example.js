// https://davidwalsh.name/es6-generators
// Easiest example

function * talkingBoutMyGeneration () {
  yield 'Talking'
  yield 'Bout\''
  yield 'My'
  yield 'Generation!!!'
}

const gen = talkingBoutMyGeneration()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().done)

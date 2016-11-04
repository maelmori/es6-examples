// https://davidwalsh.name/es6-generators
// sending messages in a bididreccional way

function * talking_bout_my_generation (x) {
  let value = yield (x + 1)
  value = yield (value * 2)
  value = yield (value / 2)
}

let gen = talking_bout_my_generation(1)
// We don't pass a value, cos there is'nt a yield waiting
// If we did so, no exception will be raised
// The value will be just discarded
console.log(gen.next()) // 2
console.log(gen.next(2)) // 4
console.log(gen.next(3)) // 1.5

// parameters in the next function

function * talkingBoutMyGeneration () {
  while (true) {
    let value = yield null
    console.log(value)
  }
}

let gen = talkingBoutMyGeneration()
console.log(gen.next(1).value)
console.log(gen.next(2).value)
console.log(gen.next(3).value)

// parameters in the next function

function * talkingBoutMyGeneration () {
  while (true) {
    let value = yield null
    console.log(value)
  }
}

let gen = talkingBoutMyGeneration()
gen.next(1)
gen.next(2)
gen.next(3)

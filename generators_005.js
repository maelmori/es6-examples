// https://davidwalsh.name/es6-generators
// parameters

function * talking_bout_my_generation () {
  while (true) {
    let value = yield null
    console.log(value)
  }
}

let gen = talking_bout_my_generation()
gen.next(1)
gen.next(2)
gen.next(3)

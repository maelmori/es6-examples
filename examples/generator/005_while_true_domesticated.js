// while true madness under control

function * idGenerator () {
  let index = 0
  // ANATHEMA!!!!
  while (true) {
    yield index++
  }
}

const gen = idGenerator()

const element1 = {id: gen.next().value}
const element2 = {id: gen.next().value}
const element3 = {id: gen.next().value}

const my_elements = [element1, element2, element3]
console.log(my_elements)

// Iterating elements in a for of loop

function * idGenerator () {
  let index = 0
  while (index < 3) {
    yield index++
  }
}

for (let element of idGenerator()) {
  console.log(element)
}

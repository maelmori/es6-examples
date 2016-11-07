// Iterating elements

function * idGenerator () {
  let index = 0
  while (index < 3) {
    yield index++
  }
  // Why return is'nt a good idea in generators
  return index++
}

for (let element of idGenerator()) {
  console.log(element)
}

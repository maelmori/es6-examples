// https://davidwalsh.name/es6-generators
// Iterating elements

function * talking_bout_my_generation () {
  let index = 0
  while (index < 3) {
    yield index++
  }
  // Why return is'nt a good idea in generators
  return index++
}

for (let element of talking_bout_my_generation()) {
  console.log(element)
}

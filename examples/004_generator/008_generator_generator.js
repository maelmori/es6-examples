// Yielding yields!!

function * talkingBoutMyGeneration_I (firstPart, secondPart) {
  for (let value of firstPart) {
    yield value
  }

  for (let value of secondPart) {
    yield value
  }
}

let firstPart = ['People ', 'try ', 'to ', 'put ', 'us ', 'd-down']
const secondPart = ['Talkin\' ', '\'bout ', 'my ', 'generation ']

let gen = talkingBoutMyGeneration_I(firstPart, secondPart)

for (let lyrics of gen) {
  console.log(lyrics)
}

// Second alternative

function * talkingBoutMyGeneration_II (firstPart, secondPart) {
  yield * firstPart
  yield * secondPart
}

firstPart = ['Just ', 'because ', 'we ', 'g-g-get ', 'around']

gen = talkingBoutMyGeneration_II(firstPart, secondPart)

for (let lyrics of gen) {
  console.log(lyrics)
}

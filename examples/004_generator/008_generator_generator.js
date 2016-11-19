// Yielding yields!!

function * talkingBoutMyGeneration (firstPart, secondPart) {
  for (let value of firstPart) {
    yield value
  }

  for (let value of secondPart) {
    yield value
  }
}

let firstPart = ['People ', 'try ', 'to ', 'put ', 'us ', 'd-down']
const secondPart = ['Talkin\' ', '\'bout ', 'my ', 'generation ']

let gen = talkingBoutMyGeneration(firstPart, secondPart)

for (let lyrics of gen) {
  console.log(lyrics)
}

// Second alternative

function * talkingBoutMyGeneration_ES6 (firstPart, secondPart) {
  yield * firstPart
  yield * secondPart
}

firstPart = ['Just ', 'because ', 'we ', 'g-g-get ', 'around']

gen = talkingBoutMyGeneration_ES6(firstPart, secondPart)

for (let lyrics of gen) {
  console.log(lyrics)
}

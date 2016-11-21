const object = {lifeAndUniverseAndEverything: 42, isAnswer: true}
const {lifeAndUniverseAndEverything, isAnswer} = object

console.log(lifeAndUniverseAndEverything) // 42
console.log(isAnswer) // true

// New variable names for the properties

const {lifeAndUniverseAndEverything: douglas, isAnswer: adams} = object
console.log(douglas) // 42
console.log(adams) // true

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

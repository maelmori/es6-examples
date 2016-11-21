const circle = {radius: 42, x: 1, y: 10}
const {radius, x, y} = circle

console.log(radius, x, y)

// New variable names for the properties

const {radius: circleRadius, x: circleX, y: circleY} = circle
console.log(circleRadius, circleX, circleY)

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

const myCircle = {
  geo: {
    position: {x: 1, y: 100},
    radius: 50
  },
  colour: {red: 100, blue: 5, green: 14}
}

const {
  geo: {
    position: {x: circleXPosition, y: circleYPposition},
    radius: circleRadius
  },
  colour: {red: circleRed, blue: circleBlue, green: circleGreen}
} = myCircle

console.log(
  circleXPosition,
  circleYPposition,
  circleRadius,
  circleRed,
  circleBlue,
  circleGreen
)

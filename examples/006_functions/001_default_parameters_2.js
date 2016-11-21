// Destructing default parameters

const geometryObject = {
  shape: 'circle',
  radius: 10,
  position: {
    x: 10,
    y: 15
  }
}

// careful: equal signs instead of semicolon.
// This is still buggy in firefox
function drawObject ({shape = 'circle', radius = 5, position = {x: 0, y: 0}}) {
  console.log(radius)
}

drawObject({})
drawObject(geometryObject)

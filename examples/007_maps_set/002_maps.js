const myMap = new Map()
myMap.set('meaning of life', 42)
const object = {
  justTesting: true
}
myMap.set(object, 34)
myMap.get(object) === 34
console.log(myMap.size === 2)
// Again
console.log(typeof myMap.length === 'undefined')
// Actually this is just destructuring
for (let [ key, val ] of myMap.entries())
  console.log(key + ' = ' + val)
myMap.delete('meaning of life')
console.log(typeof myMap.get('meaning of life') === 'undefined')
console.log(!myMap.has('meaning of life'))
console.log(myMap.keys())
console.log(myMap.values())
myMap.clear()
console.log(myMap.size === 0)

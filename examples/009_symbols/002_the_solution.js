// Symbol is the solution
const myFancyDate = new Date(2016, 11, 11)

// You can create a new property
const mySymbol = Symbol('isMyBirthday')
myFancyDate[mySymbol] = true  // guaranteed not to collide

// 'isMyBirthday' is a description, used to log
console.log(mySymbol)
// You can't access it via dot notation
console.log(myFancyDate.mySymbol) // FAIL
// You can check if the property is there
if (mySymbol in myFancyDate) {
  console.log(mySymbol.toString() + ' and it is')
}
// As symbols were designed to avoid collisions, there are ignored by
// introspection features as Object.keys(obj) and Object.getOwnPropertyNames(obj)
console.log(Object.keys(myFancyDate), Object.getOwnPropertyNames(myFancyDate))
for (let i in myFancyDate) {
  // Empty
  console.log(i)
}
// You can find them, anyway, in Reflect.ownKeys(obj)
console.log(Reflect.ownKeys(myFancyDate))

// You already know a Symbol:
console.log([][Symbol.iterator])

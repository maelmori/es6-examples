// Symbol is the solution
const myFancyDate = new Date(2016, 11, 11)

// You can create a new property
const myBirthdaySymbol = Symbol('isMyBirthday')
myFancyDate[myBirthdaySymbol] = true  // guaranteed not to collide

if (myFancyDate[myBirthdaySymbol]) {
  console.log('hooray hooray oh happy day!!')
}

// 'isMyBirthday' is a description, used to log
console.log(myBirthdaySymbol)
// You can't access it via dot notation
console.log(myFancyDate.myBirthdaySymbol) // undefined as big as a castle
// You can check if the property is there
if (myBirthdaySymbol in myFancyDate) {
  console.log(myBirthdaySymbol.toString() + ' and it is')
  console.log(myBirthdaySymbol + ' this will fail, so be careful and remember the toString()')
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

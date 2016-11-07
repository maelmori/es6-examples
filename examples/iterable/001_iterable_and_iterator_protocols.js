// There are two new ES6 protocols iterable and iterator

// The iterable protocol allow to define a iteration behaviour
// In order to be iterable, an object must implement the @@iterator method
// accesible though a member with the key Symbol.iterator

const a = [1, 2, 3, 4]
// @@iterator method
console.log(typeof a[Symbol.iterator])
// So, you can do
for (let value of a) {
  console.log(value)
}

// The iterator protocol defines a standard way to produce secuencial values
// An object is an iterator when it implements the next funcion, wich returns
// an object with two properties: value and done

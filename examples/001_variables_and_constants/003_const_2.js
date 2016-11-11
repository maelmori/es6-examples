// Making constants inmutables:

// ES5
Object.defineProperty(typeof global === 'object' ? global : window, 'PI', {
  value: 3.141593,
  enumerable: true,
  writable: false,
  configurable: false
})
console.log(PI)
PI = 3.51 // No error here (in sloppy mode)
console.log(PI) // But no changes made

// ES6
const otherConst = Object.freeze({myProperty:10})
otherConst.myProperty = 11 // again, no errors in sloppy mode
console.log(otherConst.myProperty) // But the value stills the same

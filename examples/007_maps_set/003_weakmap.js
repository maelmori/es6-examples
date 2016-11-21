// Works like map with a few restrictions:
// 1.- Cannot use primitives as keys
// 2.- Cannot use for loops, foreach, no keys function...
const weakmap = new WeakMap()
let value1 = {testing: true}
weakmap.set(value1, 21)
console.log(weakmap.get(value1))
// So why the fuck would you want to use this crappy map?
// Just because when you delete the referenced element
value1 = null
// the element inside the weakmap is subject of garbage collection
// SO
// if you are messing with the DOM, you don't have the pain of maintain
// a real set mapped to elements that may be not there.
console.log(weakmap.get(value1))

// weakset works roughly the same way

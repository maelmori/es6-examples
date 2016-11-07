// weakset works roughly the same way
const weakset = new WeakSet()
let today = new Date()
weakset.add(today)
console.log(weakset.has(today))
// Oooops
today = null
// Bye bye
console.log(weakset.has(today))

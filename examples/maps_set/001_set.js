const mySet = new Set()
mySet.add('Talking').add('bout').add('my').add('generation').add('generation')
console.log(mySet.size === 4)
// caution of EPIC FAIL
console.log(typeof mySet.length === 'undefined')
console.log(mySet.has('generation') === true)
for (let key of mySet.values()) // insertion order
  console.log(key)
mySet.clear()
console.log(mySet.size === 0)
mySet.add('Uno').add('Dos')
console.log(mySet.entries())
mySet.forEach(function (element) {
  console.log('Iterating ' + element)
})
console.log(mySet.keys())
console.log(mySet.values())

// We've seen this before, but I want to stop just a minute here.
// Why not to use for... in
const test = [1, 2, 3, 4, 5, 6]
for (let i in test) {
  // Issue #1: i is a string, not an integer. There are no 0, 1, 2 or 3 values
  // for i, but "0", "1", "2" and so on. So if you're going to calculate
  // to find if you're next to the endo of the array, i < test.length
  // can give you unexpected results

  // Issue #2: if somewhere else you modify your array methods via array.Prototype
  // the new methods will apear as elements of the array.

  // Issue #3: In some circunstances, this code can look in arbitrary order!

  console.log(test[i])
}

// Since ES5, we also have a forEach method
test.forEach(function (element) {
  console.log(element)
  // But here we can't use break or return statements.
  if (element === 2) {
    // Error!!
    //break
    // Useless!!
    return
  }
})

// So, what should you use instead?
// The shining brand new for... of loop
for (let value of test) {
  console.log(value)
}
// You'll avoid the for... in pitfalls, and you can use break and return

// But, wait! I want the keys!!!
// all right then!
for (let key of test.keys()) {
  console.log(test[key])
}

// Also, it works on iterables and generators, map and set objects, etc.
// We can use it, as we saw before, in any object in wich we write a
// [Symbol.iterator] method.

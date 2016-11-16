// https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/
// Imagine you are enhancing your date objects with a boolean

const myFancyDate = new Date(2016, 11, 11)

// You can create a new property
myFancyDate['isMyBirthday'] = true

// Sounds nice but, ¿What are the possible issues?
// #1 for... in loops can found your property. And maybe in places where you don't spect this to be readable.
// #2 Maybe you discover a fancy library, but it uses the same key as you in the Date object
// #3 Maybe the standard comitee decides to include in ES7 a 'isMyBirthday' property to the date object.

// Solution 1
myFancyDate['isMyBirthdayAndPleaseDontOverwriteThisHandyProperty'] = true

// I think we all made this sometime in our lifes.
// I wont speak much about it
// Solution 2
// A little of ES6 magic to greate a random string
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
function * getRandomPosition (array) {
  while (true) yield Math.floor(Math.random() * array.length)
}
const gen = getRandomPosition(letters)
const isMyBirthday = Array.from({length: 20}, () => Array.from(letters)[gen.next().value]).join('')

myFancyDate[isMyBirthday] = true

// So, ¡¡perfect!! Your code seems legible enough.
// But when you use introspection in your element
// What should you see?

for (let i in myFancyDate) {
  // Oh, fuck!
  console.log(i)
}

// Ok, in ES5, I surrender.

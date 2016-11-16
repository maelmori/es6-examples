// ES5
function reflect (value) {
  return value + 1
}

// ES6
const res3 = value => value + 1

console.log(reflect(1), res3(1))

// Several arguments
// ES5
function sumES5 (a, b) {
  return a + b
}

// ES6
const sumES6 = (a, b) => a + b

console.log(sumES5(1, 3), sumES6(4, 5))

// Several lines of body function
const sumMultiline = (a, b) => {
  console.log(a)
  console.log(b)
  return a + b
}
console.log(sumMultiline(1, 2))

// Use in map o filter
// Map, filter and reduce existed since 2009 ES5
// But now they look better, powered with arrow functions

const applicants = [
  {
    name: 'Margaret',
    surname: 'Hamilton',
    selected: false,
    experience: 'Designed and built the on-board flight control software for NASA’s Apollo and Skylab missions'
  },
  {
    name: 'Jack',
    surname: 'Torrance',
    selected: true,
    experience: 'All work and no play makes Jack a dull boy'
  }
]

applicants.map(applicant => applicant.selected = !applicant.selected)
let trustedApplicants = applicants.filter(applicant => applicant.selected)
console.log(trustedApplicants)

// And, of course, reduce
console.log([0, 1, 2, 3, 4].reduce((lastValue, currentValue) => lastValue + currentValue))

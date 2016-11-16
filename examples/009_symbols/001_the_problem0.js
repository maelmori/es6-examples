const numbers = [
  {real: 12, objetivo: 15},
  {real: 1, objetivo: 15},
  {real: 1, objetivo: 15},
  {real: 9, objetivo: 15},
  {real: 2, objetivo: 15},
  {real: 0, objetivo: 15},
  {real: 15, objetivo: 15},
  {real: 12, objetivo: 15},
  {real: 1, objetivo: 15},
  {real: 14, objetivo: 15}
]

const sum = numbers.reduce((p, c) => {
//  console.log(p)
  return {real: c.real + p.real, objetivo: c.objetivo + p.objetivo}
}, {real: 0, objetivo: 0})
console.log(sum)
console.log((sum.real / sum.objetivo) * 100)
console.log(0.1 + 0.2)

class Money {
  constructor (amount) {
    this.amount = amount
  }
  valueOf () {
    return Math.round(this.amount * 100) / 100
  }
}

var m = new Money(50.42355446)
var n = new Money(30.342141)

console.log(n + m)

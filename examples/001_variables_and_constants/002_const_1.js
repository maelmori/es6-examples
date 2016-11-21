// ES6 constants are NOT abotut inmutability

const myConst = 10

myConst = 10 // FAIL
myConst = 11 // EPIC FAIL
myConst ++ // You're fucking nuts??!!
myConst += 5 // You better go home, kiddo!

const myBirthday = new Date(1974, 11, 11)
myBirthday.setDate(20) // Wait, what???
console.log(myBirthday) // !!??

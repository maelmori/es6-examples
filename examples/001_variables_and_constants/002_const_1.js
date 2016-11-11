// ES6 constants are NOT abotut inmutability

const myConst = 10

myConst = 10 // FAIL
myConst = 11 // EPIC FAIL
myConst ++ // You're fucking nuts??!!
myConst += 5 // You better go home, kiddo!

const otherConst = {myProperty:10}
otherConst.myProperty = 11 // Wait, What???

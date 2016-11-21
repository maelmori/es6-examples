const name = 'juanillo'

const order = {
  quantity: 5,
  pricePerUnit: 4.5,
  product: 'cervezas ',
  productTrademark: 'Paulaner'
}

const user = {name: 'Felipe Perez', level: 5}

// Simple interpolation example
// ES6
console.log(`hola ${name}`)
// ES5 Flavour
console.log('hola ' + name)

// Multiline strings
// Concatenate expressions
// ES6
console.log(`${name} tomará ${order.quantity}
  ${order.product + order.productTrademark} `)
// ES5
console.log(name + ' tomará ' + order.quantity + '\n\
  ' + order.product + order.productTrademark)

// Expression interpolation
// ES6
console.log(`Y deberá ${order.quantity * order.pricePerUnit} pavos.`)
// ES5
console.log('Y deberá ' + (order.quantity * order.pricePerUnit) + ' pavos.')

// Functions and complex interpolation
console.log(`Bienvenido al sistema, ${user.name.toUpperCase()}.`)
console.log(`Bienvenido al sistema, ${user.level < 10 ? 'pardillo' : user.name}.`)

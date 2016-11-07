const name = 'juanillo'

const order = {
  quantity: 5,
  price_per_unit: 4.5,
  product: 'cervezas ',
  product_trademark: 'Paulaner'
}

var user = {name: 'Felipe Perez', level: 5}

// Simple interpolation example

console.log(`hola ${name}`)
console.log('hola ' + name)
// Multiline strings
// Concatenate expressions

// ES6
console.log(`${name} tomará ${order.quantity}
  ${order.product + order.product_trademark} `)
// ES5
console.log(name + ' tomará ' + order.quantity + '\n\
  ' + order.product + order.product_trademark);

// Expression interpolation
// ES6
console.log(`Y deberá ${order.quantity * order.price_per_unit} pavos.`)

// ES5
console.log('Y deberá ' + (order.quantity * order.price_per_unit) + ' pavos.')

// Functions and complex interpolation
console.log(`Bienvenido al sistema, ${user.name.toUpperCase()}.`)
console.log(`Bienvenido al sistema, ${user.level < 10 ? 'pardillo' : user.name}.`)

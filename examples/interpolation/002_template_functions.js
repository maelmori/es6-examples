// Template functions

const name = 'Juanillo'

const order = {
  quantity: 5,
  pricePerUnit: 4.5,
  product: 'cervezas ',
  productTrademark: 'Paulaner'
}

function myES6TemplateFunction (strings, ...values) {
  console.log(values[0] + strings[1] + values[1] + strings[2] + values[2])
}

myES6TemplateFunction`${name} se ha pimplado ${ order.quantity } de esas ${order.product}`
myES6TemplateFunction`${name} debe ${ order.pricePerUnit * order.quantity } por todas esas ${order.product}`

// ES5
function myES5TemplateFunction (strings, values) {
  console.log(values[0] + strings[0] + values[1] + strings[1] + values[2])
}

myES5TemplateFunction([' se ha pimplado ', ' de esas '], [name, order.quantity, order.product])
myES5TemplateFunction([' debe ', ' por todas esas '], [name, (order.pricePerUnit * order.quantity), order.product])

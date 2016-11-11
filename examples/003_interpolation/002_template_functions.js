// Template functions

const name = 'Juanillo'

const order = {
  quantity: 5,
  pricePerUnit: 4.5,
  product: 'cervezas ',
  productTrademark: 'Paulaner'
}

function myES6TemplateFunction (strings, ...values) {
  let [name, quantity, product, productTrademark] = values
  if (productTrademark === 'Paulaner') {
    product = 'ricas ' + product
  }
  console.log(name + strings[1] + quantity + strings[2] + product)
}

myES6TemplateFunction`${name} se ha pimplado ${ order.quantity } de esas ${order.product}${order.productTrademark}`
myES6TemplateFunction`${name} debe ${ order.pricePerUnit * order.quantity } por todas esas ${order.product}${order.productTrademark}`

// ES5
function myES5TemplateFunction (strings, values) {
  if (values[3] === 'Paulaner') {
    values[2] = 'ricas ' + values[2]
  }
  console.log(values[0] + strings[0] + values[1] + strings[1] + values[2])
}

myES5TemplateFunction([' se ha pimplado ', ' de esas '], [name, order.quantity, order.product, order.productTrademark])
myES5TemplateFunction([' debe ', ' por todas esas '], [name, (order.pricePerUnit * order.quantity), order.product, order.productTrademark])

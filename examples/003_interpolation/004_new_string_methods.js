// Raw property and String method

const name = 'Juanillo'

const order = {
  quantity: 5,
  pricePerUnit: 4.5,
  product: 'cervezas ',
  productTrademark: 'Paulaner'
}

function myES6TemplateFunction (strings, ...values) {
  // As a property, we can access to the original string
  console.log(strings.raw)
}

myES6TemplateFunction`${name} se ha pimplado ${ order.quantity } de esas ${order.product}`

// The raw method of the String object works like a template function
const txt = String.raw`${name} se ha pimplado ${ order.quantity } de esas ${order.product}`
console.log(txt)
// Wich is more or less the same
console.log(`${name} se ha pimplado ${ order.quantity } de esas ${order.product}`)

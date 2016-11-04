// Template functions

const name = 'Juanillo'

const order = {
  quantity: 5,
  price_per_unit: 4.5,
  product: 'cervezas ',
  product_trademark: 'Paulaner'
}

function my_es6_template_function (strings, ...values) {
  console.log(values[0] + strings[1] + values[1] + strings[2] + values[2])
}

my_es6_template_function`${name} se ha pimplado ${ order.quantity } de esas ${order.product}`
my_es6_template_function`${name} debe ${ order.price_per_unit * order.quantity } por todas esas ${order.product}`

// ES5
function my_es5_template_function (strings, values) {
  console.log(values[0] + strings[0] + values[1] + strings[1] + values[2])
}

my_es5_template_function([' se ha pimplado ', ' de esas '], [name, order.quantity, order.product])
my_es5_template_function([' debe ', ' por todas esas '], [name, (order.price_per_unit * order.quantity), order.product])

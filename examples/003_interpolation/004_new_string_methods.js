// String. repeat
console.log('pepino ' + 'ino '.repeat(5))

// String search
console.log('pepino'.startsWith('pep'))
console.log('pepino'.endsWith('ino'))
console.log('pepino'.includes('pepi'))

// Those new methods are not strictly of the String object
// but they are about formatting numbers in strings

let formatter = new Intl.NumberFormat('es-ES')
console.log(formatter.format(1234567.89)) // 1,234,567.89

formatter = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' })
console.log(formatter.format(100200300.40)) // € 100,200,300.40

console.log(['a', 'á', 'n', 'ñ', 'z'].sort()) // [ 'a', 'n', 'z', 'á', 'ñ' ]
let esCollator = new Intl.Collator('es').compare
console.log(['a', 'á', 'n', 'ñ', 'z'].sort(esCollator)) // [ 'a', 'á', 'n', 'ñ', 'z' ]

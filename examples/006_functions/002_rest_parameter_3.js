// All arguments have degault values.
// In the case of ordinary arguments, it is "undefined"
// In the case of rest parameters, it is an empty array

function myES6concat (separator, ...chunks) {
  console.log(separator, chunks)
}
myES6concat()

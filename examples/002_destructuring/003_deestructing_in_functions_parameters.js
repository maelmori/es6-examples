function list_arguments ([ element_1, element_2 ]) {
  console.log(element_1, element_2)
}
function object_1 ({ name: n, value: v }) {
  console.log(n, v)
}
function object_2 ({ name, value }) {
  console.log(name, value)
}

const myList = [ 'element 1', 2 ]
const myObj = {name: 'name', value: 7}

list_arguments(myList)
object_1(myObj)
object_2(myObj)

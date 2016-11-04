// Also, class definition body are executed in strict mode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// Take care about variable definitions and eval executions

class Shape {
  constructor (id) {
    this.id = id
    let a = 1
    // 'with' expression not longer allowed
    with(a) {
      // Exception!!!!
      console.log(a)
    }
    // octals with this syntax are not longer alowwed in strict mode
    let b = 015 + 18
    console.log(b)
    // If you specifically want to use octal numbers, this is the right notation:
    let a = 0o15;
    // avoid deletion of unqualified identifiers (as simple variable names)
    delete a
  }
}
const s = new Shape(1)

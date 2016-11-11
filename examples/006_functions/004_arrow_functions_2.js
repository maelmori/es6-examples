// Lexical this

function MyES5Class () {
  this.foo = 'Hello'
  jQuery('#BigRedButton').click(function () {
    // What is "this" here??
    // I'll tell you: "this" is the window object
    // You will create a global variable called foo unrelated to your object
    this.foo = 'Goodbye'
  })
  // Tipically, you will fix it with closures
  var self = this
  jQuery('#BigRedButton').click(function () {
    self.myProperty = 'Goodbye'
  })
}

// ES6 Arrow functions come to the rescue!
class MyES6Class {
  constructor () {
    this.foo = 'Hello'
    // WIN!
    // NOW "this" means "your object"
    jQuery('#BigRedButton').click(() => this.foo = 'Goodbye')
    // Dont be fooled by the use of brackets
    // If it is an arrow function, it will work
    jQuery('#BigRedButton').click(() => {
      this.foo = 'Goodbye'
    })
  }
}

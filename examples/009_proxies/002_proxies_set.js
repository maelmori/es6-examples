// https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect/

const myObject = {
  myProperty: 0
}

const myProxy = new Proxy(myObject, {
  set: function (target, key, value, receiver) {
    if (key != 'myProperty') {
      console.log("Please, you can only set myProperty")
    } else {
      Reflect.set(target, key, value, receiver)
    }
  }
})

myProxy.anyOtherThing = "Test"
myProxy.myProperty = 10
console.log(myProxy)

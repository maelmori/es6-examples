// https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect/
// https://ponyfoo.com/articles/es6-proxy-traps-in-depth

const myConnection = {
  database: 'My Database',
  user: 'My user',
  password: 'My super secured password'
}

var handler = {
  get (target, key, receiver) {
    if (key === 'password') {
      console.log('Stop nosing around!!')
      return null
    } else {
      return Reflect.get(target, key, receiver)
    }
  }
}

const myProxyfiedConnection = new Proxy(myConnection, handler)

for (let i in myProxyfiedConnection) {
  console.log(i + ' = ' + myProxyfiedConnection[i])
}

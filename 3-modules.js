// modules
// some popular built in modules:
// OS
// PATH
// FS (File System)
// HTTP

// node uses CommonJS library, every file is a module by default
// modules - encapsulated code

const names = require('./4-names')

// one option
// const {name1, name2} = require('./4-names')
const sayHello = require('./5-utils')

const data = require('./6-alternative')

// require invokes the code in mind grenade
require('./7-mind-grenade')

console.log(data)
console.log(names)

sayHello('Paul')
sayHello(names.name1)
sayHello(names.name2)
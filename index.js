// local modiuls

const { a, mySum } = require('./local-1')
const { a: a2, add } = require('./local-2')
// after change this name its called name alias
// console.log(add(7, 8, 0))

// build in modiuls

const path = require('path')
// console.log(path.delimiter("C:/Users/rakib/OneDrive/Desktop/HERO/Learning-Node/index.js"))

path.join()
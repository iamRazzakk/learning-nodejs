const fs = require('fs')
// reading a file syncly
const readMyText = fs.readFileSync('./Text/mytext.txt', "utf-8")
console.log(readMyText)
const fs = require('fs')
// reading a file syncly
const readMyText = fs.readFileSync('./Text/mytext.txt', "utf-8")

console.log(readMyText)
// writing a text
const writterText = fs.writeFileSync('./Text/myWritten.txt', "Hello world how are you?")
console.log(writterText)
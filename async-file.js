
const fs = require('fs')
// reading text async 
fs.readFile('./Text/mytext.txt',"utf-8", (error, data) => {
    if (error) {
        throw error("This is error")
    }
    console.log(data)
})
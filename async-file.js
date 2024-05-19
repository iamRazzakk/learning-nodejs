
const fs = require('fs')
// reading text async 
fs.readFile('./Text/mytext.txt',"utf-8", (error, data) => {
    if (error) {
        throw error("This is error")
    }
    console.log(data)

    // writing text async
    fs.writeFile('./Text/myWritten2.txt',data,"utf-8",(error)=>{
        if(error){
            throw error;
        }
    })
})
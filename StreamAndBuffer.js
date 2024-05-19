// const http = require('http')
// const fs = require('fs')
// // creating server useing raw nodejs
// const server = http.createServer()
// // console.log(server)
// // listener 
// server.on("request", (req, res) => {
//     if (req.url === "/read-file" && req.method === "GET");
//     const readStream = fs.createReadStream(process.cwd() + './myText.txt')

//     // stream file reading

//     readStream.on("data", (buffer) => {
//         res.statusCode = 200;
//         res.write(buffer)
//     })
//     readStream.on('end', () => {
//         res.statusCode = 200;
//         res.end("Hello from world")
//     })
//     readStream.on('error', (error) => {
//         res.statusCode = 404;
//         res.end(error)
//         res.end("somethig wrong")
//     })
// }
// )
// server.listen(5000, () => {
//     console.log(`server is listening on port 5000`)
// })
const http = require('http');
const fs = require('fs');
const path = require('path');

// creating server using raw nodejs
const server = http.createServer();

// listener 
server.on("request", (req, res) => {
    if (req.url === "/read-file" && req.method === "GET") {
        const filePath = path.join(process.cwd(), 'Text', 'myText.txt');
        const readStream = fs.createReadStream(filePath);

        // stream file reading
        readStream.on("data", (buffer) => {
            res.statusCode = 200;
            res.write(buffer);
        });
        readStream.on('end', () => {
            res.statusCode = 200;
            res.end("The streaming is over!");
        });
        readStream.on('error', (error) => {
            console.error(error);
            res.statusCode = 500;
            res.end("Something went wrong!");
        });
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(5000, () => {
    console.log(`server is listening on port 5000`);
});
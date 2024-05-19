const EventEmitter = require('events')
const myEmitter = new EventEmitter();
myEmitter.on("birthday", ()=>{
    console.log("Happy Birthday to you")
})
myEmitter.on("birthday", (gift)=>{
    console.log(`I will sand a ${gift} `)
})
myEmitter.emit("birthday", "Bike")
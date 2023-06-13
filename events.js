const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (data, secondData) => {//response no importa puede ser lo que sea
    console.log(data);
    console.log('xd') 
    console.log(secondData);
});

customEmitter.emit('response', 'hola', [1, 2, 3])//cualquier tipo de dato

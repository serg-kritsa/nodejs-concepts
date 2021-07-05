const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res)=>{
    res.end("I am connected!")
});

const io = socketio(server);

io.on('connect', (socket,req)=>{
    socket.emit('from-server','websocket server',(acknowledgementDataFromClient)=>{
        console.log(acknowledgementDataFromClient)
    });
    socket.on('from-client', (dataFromClient, acknowledgement)=>{
        console.log('DBG: on from-client <<<', dataFromClient)
        acknowledgement({ server: "acknowledged", received: dataFromClient.length  })
    })
})
server.listen(8001);
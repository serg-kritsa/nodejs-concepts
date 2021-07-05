// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

// 2-way communication
// server<-->client
// connection kept open

const http = require('http');
// 3rd party module, ws!
// https://www.npmjs.com/package/ws
const websocket = require('ws');

const server = http.createServer((req, res)=>{
    res.end("I am connected!")
});

const wss = new websocket.Server({server})

// https://github.com/websockets/ws/blob/HEAD/doc/ws.md#event-headers
wss.on('headers',(headers,req)=>{
    console.log(headers)
});

// https://github.com/websockets/ws/blob/HEAD/doc/ws.md#event-connection
wss.on('connection', (ws,req)=>{
    ws.send('Welcome to the websocket server!!')
    ws.on('message',(msg)=>{
        console.log(msg)
    })
})


server.listen(8000);
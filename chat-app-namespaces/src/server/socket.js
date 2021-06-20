const socketio = require('socket.io')
const server = require('./express')

const io = socketio(server);

module.exports = io

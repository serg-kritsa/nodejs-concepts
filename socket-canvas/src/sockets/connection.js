const socketio = require('socket.io');
const expressServer = require('../express/server')

const io = socketio(expressServer);

module.exports = io;
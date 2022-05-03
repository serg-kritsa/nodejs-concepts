import io from 'socket.io-client';
let socket = io.connect('http://localhost:8181');
// let socket = io.connect('http://node-server:8181');
socket.emit('clientAuth','uihjt3refvdsadf')
export default socket;
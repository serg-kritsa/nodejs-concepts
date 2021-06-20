const app = require('./app')

const port = 3000;
const expressServer = app.listen(port, ()=>console.log("Express and socketio are listening on port "+ port));

module.exports = expressServer
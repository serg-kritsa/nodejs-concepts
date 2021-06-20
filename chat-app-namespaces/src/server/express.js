const path = require('path');
const express = require('express');
// console.log(namespaces[0]);

const app = express();
const publicDirectoryPath = path.join(__dirname, '../../public')

app.use(express.static(publicDirectoryPath))

const port = 3000
const server = app.listen(port, () => console.log('Listening '+ port) );

module.exports = server
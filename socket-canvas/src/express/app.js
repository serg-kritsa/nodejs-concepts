const express = require('express');
const path = require('path');
const helmet = require('helmet')
const app = express();
const publicDirectory = path.join(__dirname + '../../../public')
app.use(express.static(publicDirectory));
app.use(helmet());

module.exports = app
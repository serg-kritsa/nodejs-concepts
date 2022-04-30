const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '..', 'src', 'views'));

// ROUTES
// // PUG basics
app.get('/v0', (req, res) => {
  res.status(200).render('demo/hello'); // ./views/demo/hello.pug
});

// // PUG pass value
app.get('/v1', (req, res) => {
  res.status(200).render('demo/basics', { pasedValue: 'Hello Pug!'});
});

// // include
app.get('/v2', (req, res) => {
  res.status(200).render('include/base');
});

// // extend
app.get('/v30', (req, res) => {
  res.status(200).render('extend/_base');
});
app.get('/v31', (req, res) => {
  res.status(200).render('extend/override');
});
app.get('/v32', (req, res) => {
  res.status(200).render('extend/append');
});
app.get('/v33', (req, res) => {
  res.status(200).render('extend/mixin');
});

module.exports = app;

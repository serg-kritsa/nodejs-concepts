const express = require('express');
const app = express();

function doWork(duration) {
  // takes process time for duration
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

// // not blocked execution
// app.get('/', (req, res) => {
//   res.send('Hi there');
// }); 

// blocked execution
app.get('/', (req, res) => {
  doWork(5000);
  res.send('Hi there');
}); 

app.listen(3000);
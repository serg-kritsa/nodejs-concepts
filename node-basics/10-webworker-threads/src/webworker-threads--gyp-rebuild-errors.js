/**
 * to check what's going on 
 * node index.js
 * ab -c 1 -n 1 localhost:3000/ 
 * ab -c 2 -n 2 localhost:3000/ 
*/
const express = require('express');
const app = express();
const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
  function startJob() {
    worker.postMessage();
  }

  const worker = new Worker(function() {
    function doJob() {
      let counter = 0;
      while (counter < 1e9) { counter++; } // 1e9 == 1 000 000 000 
      return counter;
    }
    this.onmessage = function() { // 2)
      postMessage(doJob()); // 3)
    };
  });

  worker.onmessage = function(message_from_worker) { // 4)
    console.log(message_from_worker.data);
    res.send('' + message_from_worker.data); // cast to string for response
  };

  startJob(); // 1)
});

app.get('/fast', (req, res) => {
  res.send('This was fast!');
});

app.listen(3000);

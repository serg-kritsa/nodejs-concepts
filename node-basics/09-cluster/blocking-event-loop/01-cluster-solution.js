// run the node code in 1st terminal 
// to test this in 2nd terminal 
// where   
//    -c in one time 
//         -n total number
// ab -c 1 -n 1 localhost:3000/               to measure single request
//                            / is needed for ab !!!
// ab -c 50 -n 500 localhost:3000/     

// 2nd terminal window
// ab -c 1            -n 1                   localhost:3000/
// 3rd terminal window
// ab -c 1            -n 1                   localhost:3000/fast     


process.env.UV_THREADPOOL_SIZE = 1; // for child

const cluster = require('cluster');
if (cluster.isMaster) {
  // cluster.fork()
  // // ab -c 2 -n 2 localhost:3000/    send 2 requests simultaneously to one child

  cluster.fork()
  cluster.fork()
  // ab -c 2 -n 2 localhost:3000/    send 2 requests simultaneously that will be processed one by one (in parallel)
} else {
  // in child mode to act like a server
  const express = require('express');
  const crypto = require('crypto');
  const app = express();
  
  app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('home');
    });
  });
  
  app.get('/fast', (req, res) => {
    res.send('This was fast!');
  });
  
  app.listen(3000);
}

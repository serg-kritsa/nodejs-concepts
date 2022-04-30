// process.env.UV_THREADPOOL_SIZE = 1;

const os = require('os');
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');


function OSTaskDoRequest() {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log('net:', Date.now() - start);
      });
    })
    .end();
}

function threadPoolDoHash() {
  crypto.pbkdf2('password', 'added-salt', 100000, 512, 'sha512', () => {
    console.log('Hash:', Date.now() - start);
  });
}

function threadPoolDoReadFS() {
  fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
  });
}

const logicalCoresNumber = os.cpus().length;
console.log(logicalCoresNumber);
function loadCores(cores, cb) {
  for (let i = 0; i < cores; i++) {
    cb();
  }
}

function netRequestTaskLowPriorityForThreadPoolTaskDemo01() { 
  loadCores(logicalCoresNumber+2, threadPoolDoHash);
  loadCores(4, OSTaskDoRequest);
}
function netRequestTaskLowPriorityForThreadPoolTaskDemo02() { 
  loadCores(logicalCoresNumber/2, threadPoolDoHash);
  loadCores(4, OSTaskDoRequest);
  loadCores(logicalCoresNumber/2, threadPoolDoHash);
}
function fsTaskHighPriorityInThreadPoolTaskDemo01() { 
  loadCores(logicalCoresNumber, threadPoolDoHash);
  loadCores(logicalCoresNumber/2, threadPoolDoReadFS);
}
function fsPriorityAndNetLowPriorityDemo01() {
  loadCores(logicalCoresNumber, threadPoolDoHash);
  loadCores(2, OSTaskDoRequest);
  loadCores(logicalCoresNumber/2, threadPoolDoReadFS);
}
function fsPriorityAndNetLowPriorityDemo02() {
  loadCores(logicalCoresNumber+2, threadPoolDoHash);
  loadCores(2, OSTaskDoRequest);
  loadCores(logicalCoresNumber/2, threadPoolDoReadFS);
}

const start = Date.now();

// netRequestTaskLowPriorityForThreadPoolTaskDemo01();
// netRequestTaskLowPriorityForThreadPoolTaskDemo02();
// fsTaskHighPriorityInThreadPoolTaskDemo01();
// fsPriorityAndNetLowPriorityDemo01()
fsPriorityAndNetLowPriorityDemo02()
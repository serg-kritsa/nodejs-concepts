const express = require("express");
const cluster = require("cluster");
const child_process = require("child_process");
const totalCPUs = require('os').cpus().length;

// --- general overview ---
// CLUSTER
//     WORKER
//     CHILD
//         send-express-app-route-data
//             data-in-child-message-handler
//                 send-data-to-worker
//                     data-in-worker-message-handler

if (cluster.isMaster) {
    console.log(`Master Process ID is - ${process.pid}`);

    // prepareChildren(totalCPUs/2);
    prepareChildren(2);

    const worker1 = prepareWorker("./workers/fab-series-worker1");
    const worker2 = prepareWorker("./workers/fab-series-worker2");

    cluster.on("online", connectedChild => {
        console.log(`Process ID ${connectedChild.process.pid} (Child) is connected to cluster`);
        //// 2) receive url param value from server route on child
        connectedChild.on("message", receivedDataFromChild => { 
            console.log(`Process ID ${connectedChild.process.pid} (Child) received  ${receivedDataFromChild}`);

            //// 3) send data from child to worker
            if (receivedDataFromChild % 2 === 0) {
                worker1.send(receivedDataFromChild);
            }
            else {
                worker2.send(receivedDataFromChild);
            }
        });
    });
}
else {
    console.log(`Child Process ID is - ${process.pid}`);
    runServer();
}

function prepareChildren(total) {
    for (let i = 0; i < total; i++) {
        let child = cluster.fork();
        console.log(`Process ID ${child.process.pid} (Child) is forked`);
    }
}

function prepareWorker(workerPath) {
    const worker = child_process.fork(workerPath);
    console.log(`Worker Process ID ${worker.pid} is forked`);

    //// 5) worker handler
    worker.on('message', function (workerResponse) {
        // Receive results from child process
        console.log(`Worker Process ID ${worker.pid} is ${workerResponse}`);
    });

    return worker; 
}

function runServer() {
    const app = express();
    //http://localhost:3000?number=20
    //http://localhost:3000?number=21
    app.get("/", (request, response) => {
        console.log(`>>> Process ID ${process.pid} (Child) received the request!`);
        const urlNumberParamValue = request.query.number;

        //// 1) send data to master
        process.send(urlNumberParamValue);

        response.send("<h3>The request has been received successfully!</h3>");
        response.end();
    });
    app.listen(3000, () => console.log("Express App is running on PORT 3000"));
}
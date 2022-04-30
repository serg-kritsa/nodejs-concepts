const express = require("express");
const cluster = require("cluster");
const child_process = require("child_process");
const totalCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master Process ID is - ${process.pid}`);

    // prepareChildren(totalCPUs/2);
    prepareChildren(2);

    cluster.on("online", connectedChild => {
        console.log(`Process ID ${connectedChild.process.pid} (Child) is connected to cluster`);
        // 2) receive url param value from server route on child
        connectedChild.on("message", receivedDataFromChild => { 
            console.log(`Process ID ${connectedChild.process.pid} (Child) received  ${receivedDataFromChild}`);
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

function runServer() {
    const app = express();
    //http://localhost:3000?number=20
    app.get("/", (request, response) => {
        console.log(`>>> Process ID ${process.pid} (Child) received the request`);
        const urlNumberParamValue = request.query.number;

        // 1) send data to master
        process.send(urlNumberParamValue); 

        response.send("<h3>The request has been received successfully!</h3>");
        response.end();
    });
    app.listen(3000, () => console.log("Express App is running on PORT 3000"));
}
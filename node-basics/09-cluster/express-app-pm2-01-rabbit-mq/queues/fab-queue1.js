// PRODUCER
const rq = require("amqplib/callback_api");

const fabObj = require("../math-logic/fibonacci-series");


function sendValueInFabQueue1(num) {
    // 1) connect to sever
    rq.connect("amqp://localhost", (err, connection) => {
        if (err) process.exit();
        const queueName = "FabSeries1";
        // 2) create channel to send messages to queue
        connection.createChannel((error, channel) => {
            if (error) {
                console.log(error);
                process.exit();
            }
            else {
                let fabNum = fabObj.calculateFibonacciValue(num);
                // 3) make sure that queue exists
                channel.assertQueue(queueName, { durable: false });
                // 4) SENDING message to queue
                //                  queue       message 
                channel.sendToQueue(queueName, Buffer.from(fabNum.toString()));
                console.log(`Queue Name is - ${queueName}`);
            }
        });
    });
}

module.exports = sendValueInFabQueue1;
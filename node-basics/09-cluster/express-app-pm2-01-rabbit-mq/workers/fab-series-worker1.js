// CONSUMER
const rq = require("amqplib/callback_api");

// 1) connect to sever
rq.connect("amqp://localhost", (err, connection) => {
    if (err) { process.exit(); }
    else {
        const queueName = "FabSeries1";
        // 2) create channel to send messages to queue
        connection.createChannel((err, channel) => {
            // 3) make sure that queue exists
            channel.assertQueue(queueName, { durable: false });
            // 4) RECEIVING message from queue
            //              queue      message 
            channel.consume(queueName, message => {
                console.log(`Waiting for messages`);
                console.log(`${queueName} - ${message.content.toString()}`);
            }, { noAck: true });
        });
    }
});


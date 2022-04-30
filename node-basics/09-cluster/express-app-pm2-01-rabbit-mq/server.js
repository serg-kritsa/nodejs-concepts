// producer - process which sends the messages
// consumer - process which receives the messages
// message - information sent by producer to consumer
// channel - place where the messages could be sent to / received from 
// queue - message store

// AMQP - Advance Message Queue Protocol used by RabbitMQ

// cd C:\Program Files\RabbitMQ Server\rabbitmq-server-3.8.2\sbin
//     rabbitmqctl list_queues
// OR
// docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.8-management
    // http://localhost:15672/    web UI credentials:   guest   guest 
// pm2 start ecosystem.config.js
// pm2 monit
    // loadtest -n 1000 -c 100 --rps 100 http://localhost:3000?number=20
    // loadtest -n 1000 -c 100 --rps 100 http://localhost:3000?number=21
// pm2 stop Worker1




const express = require("express");

const fabQueue1 = require("./queues/fab-queue1");
const fabQueue2 = require("./queues/fab-queue2");

const app = express();

app.get("/", (request, response) => {
    let num = request.query.number;
    if (num % 2 === 0) {
        fabQueue1(num);
    }
    else {
        fabQueue2(num);
    }
    response.send("<h3>The request has been received successfully!</h3>");
});

app.listen(3000, () => console.log("Express App is running on PORT: 3000"));
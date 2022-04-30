// REDIS server as message broker

// docker run --name my-redis -p 6379:6379 -d redis 
// npm i -g pm2
    // pm2 start ecosystem.config.js
    // pm2 monit
    // loadtest -n 1000 -c 100 --rps 100 http://localhost:3000?number=20 // test subscriber1
    // loadtest -n 1000 -c 100 --rps 100 http://localhost:3000?number=23 // test subscriber2

const express = require("express");
const redis = require("redis");

const keys = require("./keys");

const app = express();

let client = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort
});

app.get("/", (request, response) => {
    console.log(`Process ID is ${process.pid}`);
    let num = request.query.number;
    if (num % 2 === 0) {
        //              channel-name         value
        client.publish("math-subscription1", num);
    }
    else {
        //              channel-name         value
        client.publish("math-subscription2", num);
    }
    response.end("<h3>Notification sent to the respective subscribers! We will send you an email with the details!</h3>");
});

app.listen(3000, () => console.log("Express App is running on PORT: 3000"));
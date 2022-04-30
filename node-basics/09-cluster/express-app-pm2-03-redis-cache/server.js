// docker run --name my-redis -p 6379:6379 redis 
// node .\server.js
// http://localhost:3000/jph/posts
// OR
// docker run --name my-redis -p 6379:6379 -d redis 
// npm i -g pm2
    // pm2 start ecosystem.config.js
    // pm2 monit
// npm install -g loadtest
    // loadtest -n 10000 -c 200 --rps 200 http://localhost:3000/jph/posts

const express = require("express");
const jphRoutes = require("./jph-routes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use("/jph",jphRoutes);
app.listen(PORT, () => console.log(`Server is running on PORT : ${PORT}`));
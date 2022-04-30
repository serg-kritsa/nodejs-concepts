
// docker run --name my-redis -p 6379:6379 -d redis 
// npm i -g pm2
// pm2 start ecosystem.config.js
// http://localhost:3000/jph/posts



const express = require("express");
const jphRoutes = require("./jph-routes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use("/jph",jphRoutes);
app.listen(PORT, () => console.log(`Server is running on PORT : ${PORT}`));
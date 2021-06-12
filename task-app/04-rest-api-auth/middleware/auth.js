const jwt = require('jsonwebtoken')
const User = require('../models/user')

// Without middleware: new request -> run route handler
// With middleware: new request -> do something -> run route handler

// // middleware example 01 (in index.js): disabling GET requests 
// app.use((req, res, next) => {
//     console.log(req.method, req.path);
//     if (req.method === 'GET') res.send('GET requests are disabled')
//     else next()
// })

// // middleware example 02 (in index.js): disabling site
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })


// // middleware example 03 (to add in route as 2nd param): disabling site
// const auth = async (req, res, next) => {
//     console.log('auth middleware');
//     next()
// }

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token // for logout functionality
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth
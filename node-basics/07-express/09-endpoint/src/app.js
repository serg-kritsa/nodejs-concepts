const express = require('express')
const geocode = require('./utils/geocode.js')

const app = express()

app.get('', (req, res) => {
    res.send({
        title: 'Home',
        name: 'User'
    })
})

// /weather
// /weather?address=
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({ errorMessage: 'Please provide an address' })
    } else {
        // geocode(address, (error, { latitude, longitude, location }) => { // can be undefined after destructuring
        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
            if (error) { return res.send({error}) }
            res.send({ latitude, longitude, location })
    
            // otherCall(one, two, (error, data) => {
            //     if (error) { return res.send({error}) }
            //     res.send({ data })
            // })
        })
    }

})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
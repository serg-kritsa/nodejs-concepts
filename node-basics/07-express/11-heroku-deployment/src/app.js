const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{
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

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
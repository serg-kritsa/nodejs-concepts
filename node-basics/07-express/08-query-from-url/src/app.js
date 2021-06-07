const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send({
        title: 'Home',
        name: 'User'
    })
})

// /help
// /help?topic=linux
app.get('/help', (req, res) => {
    if (!req.query.topic) {
        return res.send({ errorMessage: 'Help article not found.' })
    }
    res.send({ link: req.query.topic+'.html' })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
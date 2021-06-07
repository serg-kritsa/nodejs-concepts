const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, 'assets') // ../
const handelbarViewsDirectoryPath = path.join(__dirname, 'handelbars') // ../

// https://expressjs.com/en/4x/api.html#app.set
app.set('view engine', 'hbs')
app.set('views', handelbarViewsDirectoryPath) // if not customised, default path for templates is views


app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    // res.render('index')
    // https://expressjs.com/en/4x/api.html#res.render
    res.render('index', {
        title: 'Handelbars Template',
        name: 'User'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.'
    })
})

app.get('/as-json', (req, res) => {
    res.send({ title: 'T', author: 'A' })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
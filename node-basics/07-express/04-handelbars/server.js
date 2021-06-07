const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, 'assets') // ../

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    // res.render('index')
    res.render('index', {
        title: 'Handelbars Template. Default Path',
        name: 'User'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
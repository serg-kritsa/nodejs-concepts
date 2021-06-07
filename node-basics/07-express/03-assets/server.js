const path = require('path')
const express = require('express')

const app = express()

// console.log(__dirname, __filename);
const htmls = path.join(__dirname, 'assets') // ../ to move up
app.use(express.static(htmls)) // access to html files in folder

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
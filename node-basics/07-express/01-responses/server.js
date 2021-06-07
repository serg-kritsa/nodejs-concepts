const express = require('express')

const app = express()

// https://expressjs.com/en/4x/api.html#res.send
app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/tag', (req, res) => {
    res.send('<h1>Hello express!</h1>')
})

app.get('/as-json', (req, res) => {
    res.send({title: 'T', author: 'A'})
})

app.get('/as-json', (req, res) => {
    res.send([{title: 'T1', author: 'A1'},{title: 'T2', author: 'A2'}])
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
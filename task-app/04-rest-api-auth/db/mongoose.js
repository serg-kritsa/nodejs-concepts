const mongoose = require('mongoose')

const dburl = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(dburl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(_=> console.log('connected to '+ dburl)).catch(_=> console.log('not connected to '+ dburl))
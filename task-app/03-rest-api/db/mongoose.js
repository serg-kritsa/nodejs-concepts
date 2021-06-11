const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerapi', {
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModify: false // remove deprication warning from console
}).then(_ => console.log('connected to db')).catch(_ => console.log('not connected to db'))
// https://mongoosejs.com/docs/
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/book-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Book = mongoose.model('Book', { // collection will be called books // in plurals and lower case
    title: {
        // https://mongoosejs.com/docs/schematypes.html
        type: String
    },
    downloads: {
        type: Number
    }
})

const book = new Book({
    title: 'T1',
    // downloads: '0' // ValidationError
    downloads: 0
})

book.save().then(() => {
    console.log(book)
}).catch((error) => {
    console.log('Error!', error)
})
// https://mongoosejs.com/docs/
const mongoose = require('mongoose')
// https://www.npmjs.com/package/validator

mongoose.connect('mongodb://127.0.0.1:27017/book-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// https://mongoosejs.com/docs/validation.html
const Book = mongoose.model('Book', { // collection will be called books // in plurals and lower case
    title: {
        type: String,
        required: true
    },
    downloads: {
        type: Number,
        validate(value) { // customization
            if (value < 0) {
                throw new Error('Must be positive')
            }
        } 
    },
    publisher: {
        type: String,
        required: true,
        trim: true,
        validate(value) { // customization with library
            if (validator.isUppercase(value)) {
                throw new Error('Provided publisher in upper case')
            }
        } 
    },
    isbn: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
})

const book = new Book({
    title: 'T1',
    // downloads: '0' // ValidationError
    downloads: 0,
    publisher: 'PPP'
})

book.save().then(() => {
    console.log(book)
}).catch((error) => {
    console.log('Error!', error)
})
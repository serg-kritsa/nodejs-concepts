// node app.js


// const fs = require('fs')
const util = require('./json-util.js')
// fs.writeFileSync('notes.txt', 'My name is Andrew.')
// fs.appendFileSync('notes.txt', ' I live in Philadelphia.')


const book = {
    title: "Title",
    author: "Author"
}

util.writeDataToFile(book)
util.editData(book, "T2", "A2")
util.writeDataToFile(book)
// util.printDataFromFile()
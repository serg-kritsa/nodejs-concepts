const { log } = require('console')
const fs = require('fs')

const util = {
    filename: 'json-util.json',
    writeDataToFile: function(data) {
        fs.writeFileSync(this.filename, JSON.stringify(data))
    },
    printDataFromFile: function() {
        const bytes = fs.readFileSync(this.filename)
        log(bytes)
        const textAsJson = bytes.toString()
        const parsedData = JSON.parse(textAsJson)
        log(parsedData)
    },
    editData: function(obj, value1, value2) {
        obj.title = value1
        obj.author = value2
    }
}

module.exports = util
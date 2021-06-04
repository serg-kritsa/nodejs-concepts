// node .\app.js --help // to show available commands
// node .\app.js add --help // to show command help
// node .\app.js --version // to show version

const yargs = require('yargs')
const noteUtils = require('./03-note-util')

const parseCmdUsingYrgs = function () {
    // Customize yargs version
    yargs.version('0.2.0')

    // Create add command
    yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            noteUtils.addNote(argv.title, argv.body)
        }
    })

    yargs.parse() // it doesn't works w/0 this line
}

module.exports = {
    parseCmdUsingYrgs
}
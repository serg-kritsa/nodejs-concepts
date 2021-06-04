// node .\app.js --help // to show available commands
// node .\app.js add --help // to show command help
// node .\app.js --version // to show version

const yargs = require('yargs')
const noteUtils = require('./06-note-util-crud')

const parseCrudCmds = function () {
    // Customize yargs version
    yargs.version('0.5.0')

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

    // Create remove command
    yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.removeNote(argv.title)
        }
    })

    // Create list command
    yargs.command({
        command: 'list',
        describe: 'List your notes',
        handler() {
            notes.listNotes()
        }
    })

    // Create read command
    yargs.command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.readNote(argv.title)
        }
    })

    // Create list command
    yargs.command({
        command: 'update',
        describe: 'Update your note',
        handler() {
            notes.updateNote()
        }
    })

    yargs.parse() // it doesn't works w/0 this line
}

module.exports = {
    parseCrudCmds
}
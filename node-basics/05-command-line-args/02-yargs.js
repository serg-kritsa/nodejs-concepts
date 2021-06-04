// node .\app.js --help // to show available commands
// node .\app.js add --help // to show command help
// node .\app.js --version // to show version

const yargs = require('yargs')

const parseCmdUsingYrgs = function () {
    // Customize yargs version
    yargs.version('0.1.0')

    // Create add command
    yargs.command({
        command: 'add',
        describe: 'Add a new note',
        handler: function () {
            console.log('Adding a new note!')
        }
    })

    // Create remove command
    yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        handler: function () {
            console.log('Removing the note')
        }
    })
    
    console.log(yargs.argv) // it doesn't works w/0 this line
}

const parseCmdUsingYrgsWithParams = function () {
    // Customize yargs version
    yargs.version('1.1.0')

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
            console.log('Title: ' + argv.title)
            console.log('Body: ' + argv.body)
        }
    })

    // Create remove command
    yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        handler: function () {
            console.log('Removing the note')
        }
    })

    yargs.parse() // it doesn't works w/0 this line
}

module.exports = {
    parseCmdUsingYrgs,
    parseCmdUsingYrgsWithParams
}
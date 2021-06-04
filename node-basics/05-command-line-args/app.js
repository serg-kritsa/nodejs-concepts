// node .\app.js add --help
// node .\app.js add --title="t" --body="b" // on Win

const parseCmdUsingArgv = require('./01-argv')
// const {parseCmdUsingYrgs, parseCmdUsingYrgsWithParams} = require('./02-yargs')
// const {parseCmdUsingYrgsWithParamsAndSaving} = require('./03-yargs-saving')
// const {parseCmdUsingYrgsWithParamsAndSavingAndRemoving} = require('./04-yargs-saving-removing')
// const {parseCmdUsingYrgsRefactored} = require('./05-yargs-refactored')
const {parseCrudCmds} = require('./06-note-util-crud')

// parseCmdUsingArgv()
// parseCmdUsingYrgs()
// parseCmdUsingYrgsWithParams()
// parseCmdUsingYrgsWithParamsAndSaving()
// parseCmdUsingYrgsWithParamsAndSavingAndRemoving()
// parseCmdUsingYrgsRefactored()
parseCrudCmds()


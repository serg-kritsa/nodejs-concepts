// node .\app.js add --title="t" // on Win

const parseCmdUsingArgv = function () {
    console.log(process.argv) // 0 = node, 1 = scriptname
    
    const command = process.argv[2] 
    if (command === 'add') {
        console.log('Adding note!')
    } else if (command === 'remove') {
        console.log('Removing note!')
    }
    
}
module.exports = parseCmdUsingArgv 
const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}
greeter('Andrew') // Hello Andrew
greeter() // Hello user



const fixedDestructionExample = (name = 'user', {street} = {}) => {
    console.log('Hello ' + name + ' from ' + street)
}
fixedDestructionExample('Unknown')

const brokenDestructionExample = (name = 'user', {street}) => { // TypeError: Cannot destructure property 'street' of 'undefined' as it is undefined.
    console.log('Hello ' + name + ' from ' + street)
}
brokenDestructionExample('Unknown') // CRASH 
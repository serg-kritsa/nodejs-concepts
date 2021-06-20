let player = {} //This is all things "this" player
let orbs = [];
let players = [];

// this function is called when the user clicks on the start button
function main(){
    // start drawing the screen
    draw()
    // call the init event when the client is ready for the data
    socket.emit('hello',{ playerName: player.name })
}
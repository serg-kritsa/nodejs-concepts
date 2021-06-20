let socket = io.connect('http://localhost:3000')

socket.on('handshake',(data)=>{
    // console.log(data.orbs)
    orbs = data.orbs
    setInterval(()=>{
        socket.emit('frameData',{
            xVector: player.xVector,
            yVector: player.yVector
        })
    },33)
})

socket.on('players',(data)=>{
    players = data.players
})

socket.on('replaceOrbAfterEating',(data)=>{
    orbs.splice(data.orbIndex,1,data.newOrb);
})

socket.on('playerXY',(data)=>{
    player.locX = data.playerX
    player.locY = data.playerY
})

socket.on('updateLeaderBoard',(data)=>{
    document.querySelector('.leader-board').innerHTML = "";
    data.forEach((curPlayer)=>{
        document.querySelector('.leader-board').innerHTML += `
            <li class="leaderboard-player">${curPlayer.name} - ${curPlayer.score}</li>
        `
    })
})

socket.on('playerDeath',(data)=>{
    console.log(`Got killed: ${data.died.name}`);
    console.log(`The killer: ${data.killedBy.name}`);
    document.querySelector('#game-message').innerHTML = `${data.died.name} absorbed by ${data.killedBy.name}`
    $("#game-message").css({
        "background-color": "#00e6e6",
        "opacity": 1
    });
    $("#game-message").show();
    $("#game-message").fadeOut(5000);

});
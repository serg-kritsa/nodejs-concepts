
$(window).load(()=>{
    // $('#loginModal').modal('show')
    $('.modal').modal('hide');
    $('.hiddenOnStart').removeAttr('hidden');
    main();
})

$('.name-form').submit((event)=>{
    event.preventDefault()
    // console.log("Submitted!")
    player.name = document.querySelector('#name-input').value;
    $('#loginModal').modal('hide');
    $('#spawnModal').modal('show')
    document.querySelector('.player-name').innerHTML = player.name
})

$('.start-game').click((event)=>{
    // 
})
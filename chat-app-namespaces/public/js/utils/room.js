function buildNamespaceRoomsHTML(nsRooms) {
    let roomList = document.querySelector('.room-list');
    roomList.innerHTML = "";
    nsRooms.forEach((room)=>{
        let glyph;
        if ( room.privateRoom ){ glyph = 'lock'
        }else{ glyph = 'globe' }
        roomList.innerHTML += `<li class="room"><span class="glyphicon glyphicon-${glyph}"></span>${room.roomTitle}</li>`
    })    
}

function buildRoomsMessagesHTML(history){
    const messagesUl = document.querySelector('#messages');
    messagesUl.innerHTML = "";
    history.forEach((msg)=>{
        const newMsg = buildMessageHTML(msg)
        messagesUl.innerHTML += newMsg;
    })
    messagesUl.scrollTo(0,messagesUl.scrollHeight);
}

function buildMessageHTML(msg){
    const convertedDate = new Date(msg.time).toLocaleString();
    return `
    <li class="message-box">
        <div class="user-image"><img src="${msg.avatar}" /></div>
        <div class="user-message">
            <div class="user-name-time">${msg.username} <span>${convertedDate}</span></div>
            <div class="message-text">${msg.text}</div>
        </div>
    </li>    
    `
}

function addClicklistenerToEachNamespaceRoom() {
    let roomNodes = document.getElementsByClassName('room');
    Array.from(roomNodes).forEach((elem)=>{
        elem.addEventListener('click',(e)=>{
            // console.log("Somone clicked on ",e.target.innerText);
            joinRoom(e.target.innerText)
        })
    })
}
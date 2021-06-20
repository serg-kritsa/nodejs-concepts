let nsSocket = "";
let socketUrl = "http://localhost:3000";
const username = prompt("What is your username?")
// namespace/endpoint
const socket = io(socketUrl, { query: { username } } );

// listen for nsList, which is a list of all the namespaces.
socket.on('sendNamespacesList',(nsData)=>{
    buildNamespacesHTML(nsData);
    addClicklistenerForEachNS();
    joinNs('/wiki');
})

function joinNs(endpoint){
    if(nsSocket){
        nsSocket.close(); // check to see if nsSocket is actually a socket
    }

    nsSocket = io(`${socketUrl}${endpoint}`)
    nsSocket.on('sendNamespaceRoomsList',(nsRooms)=>{
        buildNamespaceRoomsHTML(nsRooms);
        addClicklistenerToEachNamespaceRoom();
        // add room automatically... first time here
        const topRoomName = document.querySelector('.room').innerText;
        joinRoom(topRoomName)
    })    
    nsSocket.on('messageToClients',(msg)=>{
        console.log(msg)
        const newMsg = buildMessageHTML(msg);
        document.querySelector('#messages').innerHTML += newMsg
    })
}

function joinRoom(roomName){
    // Send this roomName to the server!
    nsSocket.emit('joinRoom', roomName,(newNumberOfMembers)=>{
        // we want to update the room member total now that we have joined!
        document.querySelector('.curr-room-num-users').innerHTML = `${newNumberOfMembers} <span class="glyphicon glyphicon-user"></span>`
    })
    nsSocket.on('sendRoomMessagesList', (history)=>{
        buildRoomsMessagesHTML(history)
    })
    nsSocket.on('updateMembers',(numMembers)=>{
        document.querySelector('.curr-room-num-users').innerHTML = `${numMembers} <span class="glyphicon glyphicon-user"></span>`
        document.querySelector('.curr-room-text').innerText = `${roomName}`
    })
};

document.querySelector('.message-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    const newMessage = document.querySelector('#user-message').value;
    nsSocket.emit('newMessageToServer',{text: newMessage})
})

let searchBox = document.querySelector('#search-box');
searchBox.addEventListener('input',(e)=>{
    const searchValue = e.target.value
    let messages = Array.from(document.getElementsByClassName('message-box'));
    console.log(messages);
    messages.forEach((msg)=>{
        if(msg.innerText.toLowerCase().indexOf(searchValue.toLowerCase()) === -1){
            // the msg does not contain the user search term!
            msg.style.display = "none";
        }else{
            msg.style.display = "block"
        }
    })
})



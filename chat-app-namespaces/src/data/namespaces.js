// Bring in the room class
const Namespace =  require('./classes/Namespace');
const Room =  require('./classes/Room');

// Set up the namespaces
let namespaces = [];
let wikiNs = new Namespace(0,'Wiki','https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png','/wiki');
let linuxNs = new Namespace(1,'Linux','https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png','/linux');

namespaces.push(wikiNs, linuxNs);

// Make the main room and add it to rooms. it will ALWAYS be 0
wikiNs.addRoom(new Room(0,'New Articles','Wiki'));
wikiNs.addRoom(new Room(1,'Editors','Wiki',true));
wikiNs.addRoom(new Room(2,'Other','Wiki'));

linuxNs.addRoom(new Room(0,'Debian','Linux'));
linuxNs.addRoom(new Room(1,'Red Hat','Linux'));
linuxNs.addRoom(new Room(2,'MacOs','Linux'));
linuxNs.addRoom(new Room(3,'Kernal Development','Linux'));

module.exports = namespaces;
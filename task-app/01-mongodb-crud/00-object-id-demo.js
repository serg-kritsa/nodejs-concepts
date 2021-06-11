
const { MongoClient, ObjectID} = require('mongodb')

const id = new ObjectID();
console.log(id);          
console.log(id.id); // binary data
console.log(id.id.length); // 12
console.log(id.toHexString()); // 24
console.log(id.getTimestamp()); 


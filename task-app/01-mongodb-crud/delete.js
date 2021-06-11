// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) { return console.log('Unable to connect to database!') }

    const db = client.db(databaseName)
    
    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#deleteMany
    db.collection('books').deleteMany({download: 27})
    .then(result => console.log(result)) 
    .catch(error => console.log(error))

    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#deleteOne
    db.collection('books').deleteOne({ title: "T1" })
    .then(result => console.log(result))
    .catch(error => console.log(error))
    
})
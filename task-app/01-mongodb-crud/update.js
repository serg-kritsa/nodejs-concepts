// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) { return console.log('Unable to connect to database!') }

    const db = client.db(databaseName)
    
    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateOne
    db.collection('books').updateOne(
        { _id: new ObjectID("5c0fe6634362c1fb75b9d6b5") }, // id from existing documents
        // https://docs.mongodb.com/manual/reference/operator/update/
        { $inc: { downloads: 1 } }
    )
    .then(result => console.log(result) )
    .catch(error => console.log(error) )

    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateMany
    db.collection('books').updateMany(
        { isRead: false }, 
        { $set: { isRead: true } })
    .then(result => console.log(result.modifiedCount) )
    .catch(error => console.log(error) )

    //app stays up and running...
})
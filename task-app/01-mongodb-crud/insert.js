// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017' // localhost causes crash
const databaseName = 'task-manager'

// http://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#.connect
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne
    db.collection('books').insertOne({
        author: 'A1', title: 'T1', isRead: false, downloads: 0
    },(error, result)=>{
        // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~insertOneWriteOpCallback
        // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~insertOneWriteOpResult
        if (error) { console.log('Unable to insert the document'); }
        console.log(result.ops);
    })

    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateMany
    db.collection('books').insertMany([
        { author: 'A2', title: 'T2', isRead: false, downloads: 0 },
        { author: 'A3', title: 'T3', isRead: true, downloads: 0 }
    ],(error, result)=>{
        if (error) { console.log('Unable to insert the documents'); }
        console.log(result.ops);
    })

    //app stays up and running...
})
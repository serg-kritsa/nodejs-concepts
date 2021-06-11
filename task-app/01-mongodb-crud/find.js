// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) { return console.log('Unable to connect to database!'); }

    const db = client.db(databaseName);

    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne
    db.collection('books').findOne(
        { _id: new ObjectID("5c0fec243ef6bdfbe1d62e2f") }, 
        (error, task) => {
            if (error) { return console.log('Unable to fetch'); }
            console.log(task);
        }
    )

    // http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find
    // http://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html
    db.collection('books').find({ isRead: false }).toArray((error, books) => {
        if (error) { return console.log('Unable to fetch'); }
        console.log(books)
    })
    
    db.collection('books').find({ isRead: false }).count((error, total) => {
        if (error) { return console.log('Unable to fetch'); }
        console.log(total)
    })

    //app stays up and running...
})
sql     table > row > column
nosql   collection > document > field

https://www.mongodb.com/try/download/community
extract zip archive in C:\mongodb-win32-x86_64-windows-4.4.6\
    cd C:\mongodb-win32-x86_64-windows-4.4.6\
    create folder for data (f.e. data)
    .\bin\mongod.exe --dbpath=data
    ...{"t":{"$date":"2021-06-12T21:28:40.431+03:00"},"s":"I",  "c":"NETWORK",  "id":23016,   "ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"off"}} // db is active on 27017
PS C:\mongodb-win32-x86_64-windows-4.4.6> .\bin\mongod.exe --dbpath=data

// Connection. native way 1 w/ opened shell 
1st termonal - mongod // process stays up and running
the 2nd terminal - mongo // shell



// Connection. way 2 w/ separate UI 
robomongo.org/download
Download Robo 3T

Connection
    localhost:27017
db.version()


MongoDB Node.JS Driver
https://docs.mongodb.com/drivers/node/current/
npm mongodb

1st termonal - mongod // process stays up and running
the 2nd terminal - npm i mongodb@3.1.10

db.getCollection('users').find({})

show dbs
use <db-name>
show collections
db.<collection-name>.find()
db.<collection-name>.insertMany([{ name: "a", price: 2 }, { name: "b", price: 4 }])
db.<collection-name>.insertOne({ name: "c", price: 6 })

db.<collection-name>.find({ name: "1" })
db.<collection-name>.find({ price: { $lte: 3} })
db.<collection-name>.find({ price: { $gte: 3}, price: { $lte: 5}  })                        both conditions
db.<collection-name>.find({ $or: [price: { $lte: 3}, price: { $gte: 5}]  })                 one of conditions

db.<collection-name>.updateOne({ name: "1" }, { $set: { price: 654 } })

db.<collection-name>.remove({})
quit()

mongodb ObjectID
https://docs.mongodb.com/manual/reference/method/ObjectId/
http://mongodb.github.io/node-mongodb-native/3.6/api/ObjectID.html
sql     table > row > column
nosql   collection > document > field

https://www.mongodb.com/try/download/community
extract zip archive in C:\mongodb-win32-x86_64-windows-4.4.6\
    cd C:\mongodb-win32-x86_64-windows-4.4.6\
    create folder for data (f.e. data)
    .\bin\mongod.exe --dbpath=data
    ...{"t":{"$date":"2021-06-12T21:28:40.431+03:00"},"s":"I",  "c":"NETWORK",  "id":23016,   "ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"off"}} // db is active on 27017
PS C:\mongodb-win32-x86_64-windows-4.4.6> .\bin\mongod.exe --dbpath=data

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


mongodb ObjectID
https://docs.mongodb.com/manual/reference/method/ObjectId/
http://mongodb.github.io/node-mongodb-native/3.6/api/ObjectID.html
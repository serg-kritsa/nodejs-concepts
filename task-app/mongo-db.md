sql     table > row > column
nosql   collection > document > field

https://www.mongodb.com/try/download/community
extract zip archive in C:\Users\user\Downloads\mongodb-win32-x86_64-windows-4.4.6\
    cd in bin
    create folder for data (f.e. c:\mongobd-data)
    .\mongod.exe --dbpath=c:\mongobd-data
    ...waiting for connection on port 27017 // db is active


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
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userId01 = new mongoose.Types.ObjectId()
const user01 = {
    _id: userId01,
    name: 'User 1',
    email: 'user01@example.com',
    password: 'my-passwd1!',
    tokens: [{
        token: jwt.sign({ _id: userId01 }, process.env.JWT_SECRET)
    }]
}

const userId02 = new mongoose.Types.ObjectId()
const user02 = {
    _id: userId02,
    name: 'Jess',
    email: 'jess@example.com',
    password: 'myhouse099@@',
    tokens: [{
        token: jwt.sign({ _id: userId02 }, process.env.JWT_SECRET)
    }]
}

const task01 = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First task',
    completed: false,
    owner: user01._id
}

const task02 = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second task',
    completed: true,
    owner: user01._id
}

const task03 = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third task',
    completed: true,
    owner: user02._id
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(user01).save() // pre save hook in schema
    await new User(user02).save() // pre save hook in schema
    await Task.insertMany([task01, task02, task03]) // no pre save hook in schema // save can be replaced w/ insertMany
}

module.exports = {
    userId01,
    user01,
    userId02,
    user02,
    task01,
    task02,
    task03,
    setupDatabase
}
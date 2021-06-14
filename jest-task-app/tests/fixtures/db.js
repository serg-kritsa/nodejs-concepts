const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')

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

const setupDatabase = async () => {
    await User.deleteMany()
    await new User(user01).save()
}

module.exports = {
    userId01,
    user01,
    setupDatabase
}
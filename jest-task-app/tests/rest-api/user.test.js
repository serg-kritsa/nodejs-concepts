const request = require('supertest')
const app = require('../../src/app')
const User = require('../../src/models/user')

const user01 = {
    name: 'User 1',
    email: 'user01@example.com',
    password: 'my-passwd1!'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(user01).save()
})

test('should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'User 2',
        email: 'user02@example.com',
        password: 'my-passwd1!'
    }).expect(201)
})

test('should login an existing user', async () => {
    await request(app).post('/users/login').send({
        email: user01.email,
        password: user01.password
    }).expect(200)
})

test('should not login user with incorrect password', async () => {
    await request(app).post('/users/login').send({
        email: user01.email,
        password: 'user01.password'
    }).expect(400)
})

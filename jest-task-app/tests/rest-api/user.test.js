const request = require('supertest')
const app = require('../../src/app')
const User = require('../../src/models/user')
const { userId01, user01, setupDatabase } = require('../fixtures/db')

beforeEach(setupDatabase)

test('should signup a new user', async () => {
    const newuser = {rawPassword: 'my-passwd1!'}
    const response = await request(app).post('/users').send({
        name: 'User 2',
        email: 'user02@example.com',
        password: newuser.rawPassword
    }).expect(201)

    const userFromDb = await User.findById(response.body.user._id)
    // expect(user).toBeNull()
    expect(userFromDb).not.toBeNull()

    // expect(response.body.user.name).toBe('User 2')

    expect(response.body).toMatchObject({
        user: { name: 'User 2', email: 'user02@example.com' },
        token: userFromDb.tokens[0].token
    })

    expect(userFromDb.password).not.toBe(newuser.rawPassword)
})

test('should login an existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: user01.email,
        password: user01.password
    }).expect(200)

    const userFromDb = await User.findById(userId01)
    expect(response.body.token).toBe(userFromDb.tokens[1].token)
})

test('should not login user with incorrect password', async () => {
    await request(app).post('/users/login').send({
        email: user01.email,
        password: 'user01.password'
    }).expect(400)
})

test('should get profile for user', async () => {
    await request(app).get('/users/me').set('Authorization', 'Bearer '+ user01.tokens[0].token).send().expect(200)
})

test('should not get profile for unauthentificated user', async () => {
    await request(app).get('/users/me').send().expect(401)
})

test('should delete account for user', async () => {
    await request(app).delete('/users/me').set('Authorization', 'Bearer '+ user01.tokens[0].token).send().expect(200)

    const userFromDb = await User.findById(userId01)
    expect(userFromDb).toBeNull()
})

test('should not delete account for unauthentificated user', async () => {
    await request(app).get('/users/me').send().expect(401)
})

test('should upload avatar image', async () => {
    await request(app).post('/users/me/avatar').set('Authorization', 'Bearer '+ user01.tokens[0].token)
    .attach('avatar','tests/fixtures/avatar.jpg').expect(200)
    
    const userFromDb = await User.findById(userId01)
    expect(userFromDb.avatar).toEqual(expect.any(Buffer))
})

test('should update valid user fields', async () => {
    await request(app).patch('/users/me').set('Authorization', 'Bearer '+ user01.tokens[0].token).send({ name: 'Jess' }).expect(200)
    
    const userFromDb = await User.findById(userId01)
    expect(userFromDb.name).toBe('Jess')
})

test('should not update valid user fields', async () => {
    await request(app).patch('/users/me').set('Authorization', 'Bearer '+ user01.tokens[0].token).send({ Location: 'City' }).expect(400)
})
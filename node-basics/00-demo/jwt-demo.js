const jwt = require('jsonwebtoken')

const myJwt = async () => {
    const token, data
    token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse')
    console.log(token) // metadata.data-with-'issued-at'.signature
    
    data = jwt.verify(token, 'thisismynewcourse') // secret phrase should be the same
    console.log(data)
}

const myJwtNotVerified = async () => {
    const token, data
    token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse')
    console.log(token) // metadata.data-with-'issued-at'.signature
    
    data = jwt.verify(token, 'thisismy') // secret phrase should be the same
    console.log(data)
}

const myJwtExpiresIn = async () => {
    console.log('expiresIn');
    const token, data
    token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token) // metadata.data-with-'issued-at'.signature

    data = jwt.verify(token, 'thisismynewcourse') // secret phrase should be the same
    console.log(data)
}

myJwt()
myJwtNotVerified()
myJwtExpiresIn()
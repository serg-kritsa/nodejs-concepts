const {calculateTip, celsiusToFahrenheit, fahrenheitToCelsius, asyncAdd} = require('./src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)

    // https://jestjs.io/docs/expect
    // https://jestjs.io/docs/expect#tobevalue
    expect(total).toBe(13)

    // if (total !== 13) {
    //     throw new Error('Total tip shoild be 13. Got'+ total)
    // }
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)

    // https://jestjs.io/docs/expect
    // https://jestjs.io/docs/expect#tobevalue
    expect(total).toBe(12.5)

    // if (total !== 13) {
    //     throw new Error('Total tip shoild be 13. Got'+ total)
    // }
})

test('Should convert 32 F to 0 C', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

test('should add two numbers', (done) => {
    asyncAdd(2,3).then(sum => {
        expect(sum).toBe(5)
        done()
    })
})

test('should add two numbers w/ async/await', async () => {
    const sum = await asyncAdd(2,3)
    expect(sum).toBe(5)
})

test('should fail w/ done callback', (done) => {
    setTimeout(()=>{
        expect(1).toBe(2)
        done()
    },200)
})
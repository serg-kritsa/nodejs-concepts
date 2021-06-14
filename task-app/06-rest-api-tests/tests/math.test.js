const {calculateTip, celsiusToFahrenheit, fahrenheitToCelsius} = require('../src/math')

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
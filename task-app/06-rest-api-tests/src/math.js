const calculateTip = (total, tipPercent = .25) => total + (total * tipPercent)

// const calculateTip = (total, tipPercent) => total + (total * tipPercent)

// const calculateTip = (total, tipPercent) => {
//     const tip = total * tipPercent
//     return total + tip
// }

// function calculateTip(total, tipPercent) {
//     const tip = total * tipPercent
//     return total + tip
// }

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) { 
                return reject('Numbers must be non-negative') 
            }
            resolve(a + b)
        }, 200)
    })
}

module.exports = {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    asyncAdd
}
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

module.exports = {
    calculateTip
}
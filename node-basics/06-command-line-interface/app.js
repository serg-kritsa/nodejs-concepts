const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    // geocode(address, callback)
    geocode(
        address, 
        // callback("ERROR", undefined) // destructure property undefined causes to crash on server side
        (error, { latitude, longitude, location } = {}) => { // = {} should be used to prevent crash 
            if (error) {
                return console.log(error)
            }

            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return console.log(error)
                }

                console.log(location)
                console.log(forecastData)
            })
        }
    )
}

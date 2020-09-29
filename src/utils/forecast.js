const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=926c8ae1c7503d2ca5de06de249f478d&query=37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })

const forecast = (longititude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=926c8ae1c7503d2ca5de06de249f478d&query=' + longititude + ',' + latitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humiduty is ' + body.current.humidity + '.')
        }
    })
}

module.exports = forecast
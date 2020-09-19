const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=85787490ab23e0e7d8b450bf99c5fd44&query=${lat},${long}`


    
    request({ url, json: true}, (error, { body } = {}) => {
        if(error){
            callback('Unable to connect to forecasting services', undefined)
        } else if(body.error){
            callback('Incorrect forecasting location. Please try again', undefined)
        } else {
            callback(undefined, {
                temperature: `Current temperature is ${body.current.temperature}` 
            })
        }    

    })
}

module.exports = forecast
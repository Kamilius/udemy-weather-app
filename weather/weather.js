const request = require('request');

const appid = 'bf6db267056a4a7dc7659a119b4137dc';

function getWeather(address, callback) {
  return new Promise((resolve, reject) => {
    request({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(address)}&units=metric&APPID=${appid}`,
      json: true,
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to OpenWeatherMap servers.');
      } else if (body.message === 'city not found') {
        reject('Unable to find provided address');
      } else if (body.cod === 200) {
        resolve({
          temperature: body.main.temp,
          humidity: body.main.humidity,
        });
      }
    });
  })
}

module.exports.getWeather = getWeather;

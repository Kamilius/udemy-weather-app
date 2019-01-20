const yargs = require('yargs');
const weather = require('./weather/weather');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      description: 'Address to find weather for (address, city, ZIP or POSTAL code)',
      alias: 'address',
      demand: true,
      string: true,
    },
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURIComponent(argv.address);
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&units=metric&APPID=bf6db267056a4a7dc7659a119b4137dc`;

axios.get(weatherUrl)
  .then((res) => {
    console.log(argv.a);
    console.log(`It's currently: ${res.data.main.temp}°C, humidity: ${res.data.main.humidity}%.`);
  })
  .catch((err) => {
    console.log(err.message);
  });

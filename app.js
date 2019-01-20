const yargs = require('yargs');
const weather = require('./weather/weather');

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

weather.getWeather(argv.a)
  .then((results) => {
    console.log(argv.a);
    console.log(`It's currently: ${results.temperature}°C, humidity: ${results.humidity}%.`);
  })
  .catch((err) => {
    console.log(err);
  });

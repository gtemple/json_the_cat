const request = require('request');
const input = process.argv.slice(2);
const site = 'https://api.thecatapi.com/v1/breeds/search?q=' + input.slice(0, 2);

request(site, (error, response, body) => {
  if (error) {
    console.log("We couldn't find this breed");
    console.log('error:', error);
  }
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const data = JSON.parse(body);
  console.log(data[0].description);
  
});

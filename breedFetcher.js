const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {

  request(`${url}${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      console.log("We couldn't find this breed");
      callback(error, null);
    }
    if (data.length === 0) {
      callback(null, 'This breed does not exist.');
      return;
    }
    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };

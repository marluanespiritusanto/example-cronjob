const axios = require("axios").default;
module.exports = axios.create({
  baseURL: "http://horoscope-api.herokuapp.com/horoscope/today/"
});

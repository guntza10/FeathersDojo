const users = require('./users/users.service.js');
const movie = require('./movie/movie.service.js');
const rentals = require('./rentals/rentals.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(movie);
  app.configure(rentals);
};

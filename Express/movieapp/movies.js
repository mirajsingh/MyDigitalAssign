var mongoose = require('mongoose');
var movieDBase = mongoose.Schema({
  title: String,
  year: Number,
  actor: String,
  category: String
});
module.exports = mongoose.model("movies", movieDBase);

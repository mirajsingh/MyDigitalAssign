var mongoose = require('mongoose');
var mongoo = mongoose.Schema({
  name: String,
  age: String,
  location: { city: String, country: String }
});
module.exports = mongoose.model("users", mongoo);

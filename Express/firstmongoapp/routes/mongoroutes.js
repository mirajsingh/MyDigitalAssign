var express = require('express');
var Router = express.Router();
var mongoose = require('mongoose');
var fdata = {};
var User = require('../mongo');
mongoose.connect('mongodb://localhost/mydatabase')
var db = mongoose.connection;
Router.get('/', function (req, res) {
  db.on('error', console.error.bind(console, "Connection Error:"));
  db.open('open', function(){
    User.find({age:"25"}, function(err, data) //Given age as string by mistake in DBase
    {
      fdata = data;
    });
console.log(fdata);
   res.send(fdata);
  });
});
module.exports = Router;

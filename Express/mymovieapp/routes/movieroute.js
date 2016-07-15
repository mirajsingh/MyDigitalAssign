var express = require('express');
//var mov=require('../movie.js');
var router = express.Router();
var requestify = require('requestify');// GET Request:

const url=require('url');
router.get('/', function(req, res) {
  res.send('reached movie api')
  console.log(data);
})
router.post('/movie', function(req, res, next) {
  var name=req.body.name;
  var data=[];
  requestify.get("http://www.omdbapi.com/?t="+name+"&y=&plot=short&r=json").then(function(response)
  {
    data.push(response.body);
    res.send(data);

   });
module.exports = router;

var express = require('express');
//var mov=require('../movie.js');
var router = express.Router();
var requestify = require('requestify');// GET Request:

const url=require('url');
router.get('/', function(req, res) {
  res.send('reached movie api')
  console.log(data);
})
var data=[];
router.post('/movie', function(req, res, next) {
  var name=req.body.name;

  requestify.get("http://www.omdbapi.com/?t="+name+"&y=&plot=short&r=json").then(function(response)
  {
    data.push(response.body);
    res.send(data);
});
  });
  router.delete('/delete', function(req, res, next) {
   var name2=req.body.name2;
   requestify.get("http://www.omdbapi.com/?t="+name+"&y=&plot=short&r=json").then(function(response) {
     data.splice(data.indexOf(name2),1);
       // Get the response body
       //response.getBody();

       res.send("Deleted"+data);
   });
 });

module.exports = router;

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/taupe', function(error, db){
  if(error) throw error;


});

//API

exports.getUrl = function(request, response){
  //@todo GET for retrieving url from mongo
};

exports.addUrl = function(request, response){
  //@todo PUT for creating mongo record for url
};

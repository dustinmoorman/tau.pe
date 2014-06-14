var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/taupe', function(error, db){
  if(error) throw error;


});


//@todo GET for retrieving url from mongo

//@todo PUT for creating mongo record for url


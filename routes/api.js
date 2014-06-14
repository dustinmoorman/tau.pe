
var db = require("mongojs").connect("localhost:27017/taupe", ["url"]);

exports.getUrl = function(request, response){
  //@todo GET for retrieving url from mongo
};

exports.addUrl = function(request, response){
  //@todo PUT for creating mongo record for url
};

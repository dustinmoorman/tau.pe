
var db = require("mongojs").connect("localhost:27017/taupe", ["url"]);

exports.getUrl = function(request, response){
  //@todo GET for retrieving url from mongo
};

exports.addUrl = function(request, response){
  //db.url.insert();
  response.json(request.body);
};

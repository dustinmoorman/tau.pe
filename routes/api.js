
var db = require("mongojs").connect("localhost:27017/taupe", ["url"]);

exports.getUrl = function(request, response){
  response.json(db.url.findOne({"slug": request.params.id}));
};

exports.addUrl = function(request, response){
  //db.url.insert();
  response.json(request.body);
};

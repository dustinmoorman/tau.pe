
var db = require("mongojs").connect("localhost:27017/taupe", ["url"]);

var generateSlug = function(){

};

exports.getUrl = function(request, response){
  db.url.find({"slug": request.params.id}, function(err, url){
    if(err){
      response.json(err);
    } else {
      response.json(url);
    }
  });
};

exports.addUrl = function(request, response){

  var urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  if(urlRegex.test(request.body.url)){
    var result = db.url.insert({
      "url": request.body.url,
      "slug": generateSlug(),
      "ip": request.connection.remoteAddress,
      "date": Date.now()
    });
  }


  response.json(result);
};

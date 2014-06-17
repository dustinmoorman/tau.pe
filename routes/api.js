
var db = require("mongojs").connect("localhost:27017/taupe", ["url"]);

var slugExists = function(slug){
  db.url.findOne({"slug": slug}, function(error, match){
    return match != null;
  });
};

var generateSlug = function(){

  var lib = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var slug = "";

  do {
    for( var i=0; i < Math.floor((Math.random() * 8)+1); i++ )
      slug += lib.charAt(Math.floor(Math.random() * lib.length));
  } while(slugExists(slug));

  return slug;
};

exports.getUrl = function(request, response){
  db.url.findOne({"slug": request.params.id}, function(error, url){
    if(error){
      response.json(error);
    } else {
      response.json(url);
    }
  });
};

exports.addUrl = function(request, response){

  var urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  var json = {};

  if(urlRegex.test(request.body.url)){
    var slug = generateSlug();

    db.url.insert({
      "url": request.body.url,
      "slug": slug,
      "date": Date.now()
    });
    json = {"slug": slug};
  }

  response.json(json);
};

'use strict';

var db = require("mongojs").connect("localhost:27017/taupe", ["url"]);

var slugExists = function(slug, callable){
  db.url.findOne({"slug": slug}, function(error, doc){
    if (error) throw error;
    if(doc){
      generateSlug(callable);
    } else {
      callable(slug);
    }
  });
};

var generateSlug = function(callable){

  var lib = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var slug = "";

  for( var i=0; i < Math.floor((Math.random() * 8)+1); i++ )
    slug += lib.charAt(Math.floor(Math.random() * lib.length));

  slugExists(slug, callable);
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

  if(urlRegex.test(request.body.url)){
    generateSlug(function(slug){
      db.url.insert({
        "url": request.body.url,
        "slug": slug,
        "date": Date.now()
      });
      response.json({"slug": slug});
    });
  }
};

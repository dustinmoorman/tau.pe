var http = require('http');

exports.index = function(request, response){
  response.render('index', {'title': 'taupe'})
}

exports.handleSlug = function(request, response){
  http.get({
    host: 'www.tau.pe',
    path: '/url/' + request.params.slug
  }, function(res){
    var data = "";

    res.on("data", function(chunk){
      if(chunk.length > 0) data += chunk;
    });

    res.on("end", function(){
      if(data != null){
        var json = JSON.parse(data);
        if(json != null){
          return response.redirect(json.url);
        }
      }
      response.render('index', {"title":"taupe"});
    });
  }).end();
};

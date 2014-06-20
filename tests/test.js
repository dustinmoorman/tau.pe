var assert = require("assert");
var http = require("http");

describe('api', function(){
  describe('#getUrl()', function(){
    it('should return the URL for the supplied slug', function(done){

		  http.get({
				host: 'www.tau.pe',
				path: '/url/GB2SL'
			},function(response){
				var data = "";

				response.on("data", function(chunk){
					if(chunk.length > 0) data += chunk;
				});

				response.on("end", function(){
					var url = '';
					if(data != null){
						var json = JSON.parse(data);
						if(json != null){
							url = json.url;
						}
					}
					assert.equal('http://softlayer.com/', url);
					done();
				});

			}).end();
		})
  })
});

describe('api', function(){
  describe('#addUrl()', function(){
    it('should return the same slug for a URL if it already exists in the DB', function(done){
      $http.post('/url',{
        "url": 'http://softlayer.com/'
      }).success(function(response){
        assert.equal('GB2SL', response.slug);
        done();
      });
    })
  })
});
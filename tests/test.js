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

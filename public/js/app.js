var app = angular.module('taupe', []).config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('IndexCtrl', function ($scope, $http){
  $scope.long = '';
  $scope.url  = '';
  $scope.submit = function(){
    var urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if(urlRegex.test($scope.long)){
      if($scope.long.length > 0){
        $http.post('/url',{
          "url": $scope.long
        }).success(function(response){
          var shortened = 'http://tau.pe/' + response.slug;
          $scope.url = '<a href="' + shortened + '">' + shortened + '</a>';
        });
      }
    } else {
        $scope.url = "That's not a URL!"
    }
  };
});



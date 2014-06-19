var app = angular.module('taupe', []).config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('IndexCtrl', function ($scope, $http){
  $scope.long = '';
  $scope.warn = '';
  $scope.submit = function(){
    var urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if(urlRegex.test($scope.long)){
      if($scope.long.length > 0){
        if(/\b(http|https):(\/\/|\/\/www.)tau\.pe\b/.test($scope.long)){
          $scope.warn = "hey now..";
        } else {
          $http.post('/url',{
            "url": $scope.long
          }).success(function(response){
            $scope.warn = "";
            $scope.long = 'http://tau.pe/' + response.slug;
          });
        }
      }
    } else {
      $scope.warn = "That's not a URL!";
    }
  };
});



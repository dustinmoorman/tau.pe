var app = angular.module('taupe', []).config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('IndexCtrl', function ($scope, $http){
  console.log('controller init');
  $scope.long = '';
  $scope.url  = '';
  $scope.submit = function(){
    console.log('submit action');
    if($scope.long.length > 0){
      console.log('http postings');
	  $http.post('/url',{
        "url": $scope.long
      }).success(function(response){
        console.log('success: '. response.slug);
        $scope.url = 'http://tau.pe/' + response.slug;
      });
    }
  };
});



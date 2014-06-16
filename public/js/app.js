var app = angular.module('taupe', ['$scope', '$http']);

app.controller('IndexCtrl', function ($scope, $http){
  $scope.long = '';
  $scope.url  = '';
  $scope.submit = function(){
    if($scope.long.length > 0){
      $http.post('/url',{
        "url": $scope.long
      }).success(function(response){
        $scope.url = 'http://tau.pe/' + response.slug;
      });
    }
  };
});



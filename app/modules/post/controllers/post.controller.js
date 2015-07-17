(function() {
  'use strict';

  angular.module('post.controllers', [])

  .controller('PostController', ['$scope', 'httpRequest', '$routeParams', 
    function ($scope, httpRequest, $routeParams) {
      $scope.postid = parseInt((typeof $routeParams.postId !== 'undefined') ? $routeParams.postId : 1);

      httpRequest.getPost($scope.postid)
        .then(function (data) {
          $scope.post = data.result[0];
        });
      httpRequest.getAllCategory()
        .then(function (data) {
          $scope.allcategory = data.result;
        });
        
  }]);

})();
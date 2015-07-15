(function() {
  'use strict';

  angular.module('category.controllers', [])

  .controller('PostCategoryController', ['$scope', 'httpRequest', '$routeParams', 
    function ($scope, httpRequest, $routeParams) {
      $scope.catId = parseInt((typeof $routeParams.catId !== 'undefined') ? $routeParams.catId : 1);
      $scope.page = parseInt((typeof $routeParams.page !== 'undefined') ? $routeParams.page : 1);

      httpRequest.getlistPostByCategory($scope.catId,$scope.page,3)
        .then(function (data) {
          $scope.listpost = data.result;
        });

  }]);

})();
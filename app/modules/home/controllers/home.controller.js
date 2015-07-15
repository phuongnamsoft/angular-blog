(function() {
  'use strict';

  var homeControllers = angular.module('home.controllers', []);

  homeControllers.controller('PostListController', ['$scope', 'httpRequest', '$routeParams', 
    function ($scope, httpRequest, $routeParams) {
      $scope.page = parseInt((typeof $routeParams.page !== 'undefined') ? $routeParams.page : 1);

      httpRequest.getListPost($scope.page,3)
        .then(function (data) {
          $scope.listpost = data.result;
        });

  }]);

})();
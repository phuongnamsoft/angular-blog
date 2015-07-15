(function() {
  'use strict';

  angular.module('home.controllers', [])

  .controller('PostListController', ['$scope', 'httpRequest', '$routeParams', 
    function ($scope, httpRequest, $routeParams) {
      $scope.page = parseInt((typeof $routeParams.page !== 'undefined') ? $routeParams.page : 1);

      httpRequest.getListPost($scope.page,3)
        .then(function (data) {
          $scope.listpost = data.result;
        });

  }]);

})();
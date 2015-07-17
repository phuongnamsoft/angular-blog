(function() {
  'use strict';

  angular.module('sidebar.controllers', [])

  .controller('sidebarController', ['$scope', 'httpRequest', '$routeParams', 
    function ($scope, httpRequest) {
      $scope.allcategory = [];

  }]);

})();


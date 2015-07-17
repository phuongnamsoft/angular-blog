(function() {
  'use strict';

  angular.module('navbar.directives', [])

  .directive('narBar', [function() {
    return {
      restrict: 'E',
      templateUrl: 'app/modules/navbar/views/index.html',
    }
    }]);

})();
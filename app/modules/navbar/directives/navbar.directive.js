(function() {
  'use strict';

  var narbarModule = angular.module('narbarModule', []);

  narbarModule.directive('narBar', [function() {
    return {
      restrict: 'E',
      templateUrl: 'app/modules/navbar/views/index.html',
    }
    }]);

})();
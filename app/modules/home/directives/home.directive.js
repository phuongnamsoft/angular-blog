(function() {
  'use strict';

  var homeDirectives = angular.module('home.directives', []);

  homeDirectives.directive('listPostHome', [function () {
    return {
      restrict: 'E',
      scope: {
        listpost : '=',
        page : '='
      },
      templateUrl: 'app/modules/home/views/listpost.html',
    }
  }]);

})();
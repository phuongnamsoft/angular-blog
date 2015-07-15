(function() {
  'use strict';

  angular.module('home.directives', [])

  .directive('listPostHome', [function () {
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
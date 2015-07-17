(function() {
  'use strict';

  angular.module('category.directives', [])

  .directive('listPostCategory', [function () {
    return {
      restrict: 'E',
      scope: {
        listpost : '=',
        page : '=',
        category: '='
      },
      templateUrl: 'app/modules/category/views/listpost.html',
    }
  }]);
  
})();
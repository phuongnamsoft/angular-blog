(function() {
  'use strict';

  var postDirectives = angular.module('post.directives', []);

  postDirectives.directive('showPost', [function () {
    return {
      restrict: 'E',
      scope: {
        post : '=',
      },
      templateUrl: 'app/modules/post/views/post.html',
    }
  }]);

})();
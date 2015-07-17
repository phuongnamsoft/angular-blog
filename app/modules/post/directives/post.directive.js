(function() {
  'use strict';

  angular.module('post.directives', [])

  .directive('showPost', [function () {
    return {
      restrict: 'E',
      scope: {
        post : '=',
      },
      templateUrl: 'app/modules/post/views/post.html',
      link: function (scope, element, attr) {
        var image = element.find('img');
        image.bind('click', function () {
          if (image.hasClass('showImage')){
            image.removeClass('showImage');
            image.css({'position':'','z-index':1,'opacity':1});
          }
          else {
            image.addClass('showImage');
            image.css({'position':'fixed','z-index':999,'max-width':1024,'opacity':1});
          }
        })
      }
    }
  }]);

})();
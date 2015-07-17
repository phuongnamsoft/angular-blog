(function() {
  'use strict';

  angular.module('sidebar.directives', [])

  .directive('sideBar', ['$compile', function ($compile) {
    return {
      restrict: 'E',
      templateUrl: 'app/modules/sidebar/views/index.html',

    }
  }])

  .directive('postSearch', ['httpRequest', function (httpRequest) {
    return {
      restrict: 'E',
      require: 'ngModel',
      templateUrl: 'app/modules/sidebar/views/search.html',
      controller: ['$scope' ,function($scope){
        $scope.searchResult = [];
        $scope.searchPost = function(keyword){
          httpRequest.searchPost(keyword).then(function(data){
            $scope.searchResult = data.result;
          });
        }
      }]
    }
  }])

  .directive('listCategory', ['$compile', function ($compile) {
    return {
      restrict: 'E',
      scope: {
        allcategory : '=',
      },
      link: function (scope, element) {
        var template = '<div class="well"><h4>Blog Categories</h4><div class="row"><div class="col-lg-6"><ul class="list-unstyled"><li ng-repeat="category in allcategory"><a href="#/category/{{category.id}}">{{category.name}}</a></li></ul></div></div></div>';
        var linkFn = $compile(template)(scope);
        element.append(linkFn);
      }
    }
  }])

})();
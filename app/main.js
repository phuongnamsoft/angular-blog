(function () {
  'use strict';
  var app = angular.module('myBlog', 
  ['ngRoute',
  'homeControllers',
  'narbarModule']);

  app.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/home',{
          templateUrl: 'app/modules/home/views/index.html',
          controller: 'PostListController'
        })
        .when('/category/:catId',{
          templateUrl: 'app/modules/category/views/index.html',
          controller: ''
        })
        .when('/post/:postId',{
          templateUrl: 'app/modules/post/views/index.html',
          controller: ''
        })
        .otherwise({
          redirectTo: "/home"
        });
    }
  ]);
})();
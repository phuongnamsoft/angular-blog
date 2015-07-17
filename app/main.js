(function () {
  'use strict';
  var app = angular.module('myBlog', ['ngRoute',
  'home.controllers',
  'home.directives',
  'post.controllers',
  'post.directives',
  'category.controllers',
  'category.directives',
  'sidebar.controllers',
  'sidebar.directives',
  'commonFilters',
  'narbarModule',
  'httpModule']);

  app.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/home',{
          templateUrl: 'app/modules/home/views/index.html',
          controller: 'PostListController'
        })
        .when('/home/:page',{
          templateUrl: 'app/modules/home/views/index.html',
          controller: 'PostListController'
        })
        .when('/category/:catId',{
          templateUrl: 'app/modules/category/views/index.html',
          controller: 'PostCategoryController'
        })
        .when('/category/:catId/:page',{
          templateUrl: 'app/modules/category/views/index.html',
          controller: 'PostCategoryController'
        })
        .when('/post/:postId',{
          templateUrl: 'app/modules/post/views/index.html',
          controller: 'PostController'
        })
        .when('/login',{
          templateUrl: 'app/modules/admin/views/login.html',
          controller: ''
        })
        .otherwise({
          redirectTo: "/home"
        });
    }
  ]);
})();
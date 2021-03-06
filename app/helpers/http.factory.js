(function() {
  'use strict';

  angular.module('httpModule',[])

    .factory('httpRequest', ['$http', '$q',function ($http, $q) {
      var request = function(url, method, data, params) {

        // Checking params
        url    = (typeof url !== 'undefined') ? url : '';
        method = (typeof method !== 'undefined') ? method : 'post';
        data   = (typeof data !== 'undefined') ? data : {};
        params = (typeof params !== 'undefined') ? params : {};

        var deferred = $q.defer();
        var promise = $http({
          method: method,
          url: url,
          params: params, // for get
          data: data // for post
        });
 
        // Resolve data
        promise
          .success(function(response) {
            deferred.resolve(response);
          })
          .error(function(msg, code) {
            deferred.reject({
              msg: msg,
              code: code
            });
          })
        ;

        // Return promise
        return deferred.promise;
      };

      //base url of PHP server
      var base_url = '/blog/server/';

      return {
        request: request,

        // get one post by postId
        getPost: function(postId) {
          var postId = (typeof postId !== 'undefined') ? postId : '1';
          return request(base_url,'get',{},{api:'post', id:postId});
        },

        // get list post by page number and limit post in page
        getListPost: function (page, limit) {
          page = (typeof page !== 'undefined') ? page : '1';
          limit = (typeof limit !== 'undefined') ? limit : '3';
          var offset = (page-1)*limit;
          return request(base_url,'get',{},{api:'listpost', offset:offset, limit:limit});
        },

        // get all post in blog
        getAllPost: function () {
          return request(base_url,'get',{api:'allpost'});
        },

        // get all category in blog
        getAllCategory: function () {
          return request(base_url,'get',{},{api:'listcategory'});
        },

        // get list post by in blog  
        getlistPostByCategory: function (catId, page, limit) {
          // checking params
          catId = (typeof catId !== 'undefined') ? catId : '1';
          page = (typeof page !== 'undefined') ? page : '1';
          limit = (typeof limit !== 'undefined') ? limit : '5';
          var offset = (page-1)*limit;
          return request(base_url,'get',{},{api:'postincategory', cid: catId, offset:offset, limit:limit});
        },

        // get one Category by category ID
        getCategoryById: function (id) {
          id = (typeof id !== 'undefined') ? id : '1';
          return request(base_url,'get',{},{api:'category',id: id});
        },

        // search blog by title with query like %%
        searchPost: function (title) {
          title = (typeof title !== 'undefined') ? title : '1';
          return request(base_url,'get',{},{api:'search', title: title});
        },
      };

    }]);

})();
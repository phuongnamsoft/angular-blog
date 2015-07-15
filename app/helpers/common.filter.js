(function () {
  angular.module('commonFilters', []).filter('paragraph', function() {
  return function(input) {
    return input.replace("\n",' &#13;&#10; ');
  };
});
})();


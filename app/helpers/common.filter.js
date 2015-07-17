(function () {
  angular.module('commonFilters', [])
    .filter('paragraph', function() {
      return function(input) {
        return input.replace("\n",' &#13;&#10; ');
      };
    })

    /**
     * return one paragraph with fixed size 
     */
    .filter('description', function (){
      return function(textToLimit)
      {
        var wordLimit = 30;
        var textAfterSplit = (textToLimit.replace(/\s+/g, ' ')).split(' ');
        return (textAfterSplit.length > wordLimit) ? 
          (textAfterSplit.splice(0, wordLimit)).join(' ') + ' ...' : textToLimit;
      }
    })
})();


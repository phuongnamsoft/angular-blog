(function () {
  angular.module('commonFilters', [])
    .filter('paragraph', function() {
      return function(input) {
        return input.replace("\n",' &#13;&#10; ');
      };
    })
    .filter('description', function (){
      return function(textToLimit)
      {
        var wordLimit = 30;
        var finalText = "";
        var text2 = textToLimit.replace(/\s+/g, ' ');
        var text3 = text2.split(' ');
        var numberOfWords = text3.length;
        var i=0;
        if(numberOfWords > wordLimit)
        {
          for(i=0; i< wordLimit; i++)
          finalText = finalText+" "+ text3[i]+" ";
          return finalText+"...";
        }
        else return textToLimit;
      }
    })
})();


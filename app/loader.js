(function () {
  'use strict';
  var modules = ['auth',
  'category',
  'home',
  'navbar',
  'post'];

  var i = 0;
  for(i;i<modules.length;i++) {
    document.write('<script src="app/modules/'+modules[i]+'/directives/'+modules[i]+'.directive.js"></script>');
    document.write('<script src="app/modules/'+modules[i]+'/controllers/'+modules[i]+'.controller.js"></script>');
  }
})();

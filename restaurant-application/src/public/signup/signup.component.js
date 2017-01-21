(function () {
'use strict';

angular.module('public').component('registerPage', {
  templateUrl: 'src/public/signup/signup-detail.html',
  bindings: {
    user: '=',
    shortName: '=',
    menus: '<',
    searched: '<',
    onSubmit: '&'
  }
});
})();


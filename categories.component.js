(function () {
'use strict';

angular.module('MenuApp').component('categoriesList', {
  templateUrl: 'shoppinglist/templates/categorieslist.template.html',
  bindings: {
    categories: '<'
  }
});
})();


(function () {
'use strict';

angular.module('MenuApp').component('itemsList', {
  templateUrl: 'shoppinglist/templates/items.template.html',
  bindings: {
    items: '<'
  }
});
})();


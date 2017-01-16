(function () {
'use strict';
angular.module('MenuApp').controller("ItemController", ItemController);
ItemController.$inject = ['$stateParams', 'items'];

function ItemController($stateParams, items ) {
var itemCtrl =this;
itemCtrl.items =items ;

}

    })();
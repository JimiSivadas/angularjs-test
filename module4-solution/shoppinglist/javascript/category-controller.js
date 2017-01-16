(function () {
'use strict';
angular.module('MenuApp').controller("MenuDataController", MenuDataController);
MenuDataController.$inject = ['categories'];

function MenuDataController(categories ) {
var mainList =this;
mainList.categories =categories ;
}
    })();
var module = angular.module("myModule", []);
module.factory("itemsList", function () {
    var itemsList = [{ name: 'BOOK', quantity: '10' }, { name: 'PEN', quantity: '20' }, { name: 'PENCIL', quantity: '30' }, { name: 'CRAYON', quantity: '12' },
    { name: 'CHALK', quantity: '2' }, { name: 'INK', quantity: '1' }, { name: 'ERASER', quantity: '30' }, { name: 'SHARPNER', quantity: '30' }];
    return itemsList;
});
module.factory("boughtList", function () {
    var boughtList = [];
    return boughtList;
});
module.controller("InitListController", InitListControllerFn);
'use.strict'
function InitListControllerFn(itemsList, boughtList) {
    this.itemsList = itemsList;
    this.addToBoughtList = function (index) {
        boughtList.push(itemsList[index]);
        itemsList.splice(index, 1);
    };
};

module.controller("BoughtListController", BoughtListControllerFn);
function BoughtListControllerFn(boughtList) {
    this.boughtList = boughtList;
};

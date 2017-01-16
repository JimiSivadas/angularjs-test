var module = angular.module("myModule", []);
module.controller("NarrowItDownController", NarrowItDownControllerFn).service("MenuSearchService", MenuSearchServiceFn)

'use.strict'
NarrowItDownControllerFn.$inject = ["MenuSearchService", "$scope"];

function NarrowItDownControllerFn(MenuSearchService, $scope) {
var ctr1=this;
  ctr1.narrowIt = function () {
    var searchItem = ctr1.searchItem;
    if (searchItem == null) {
     ctr1.emptyMessage = "Nothing Found!"
    }
    else {
      ctr1.emptyMessage = " ";
      var promise = MenuSearchService.getMatchedMenuItems(searchItem);
      promise.then(function success(response) {
        var menus = [];
        angular.forEach(response.data.menu_items, function (value, key) {
          var description = value.description;
          if (description.indexOf(searchItem) !== -1) {
            menus.push(value);
          }
        });
        ctr1.foundMenuList = menus;
        if (menus.length == 0) {
          ctr1.emptyMessage = "Nothing Found!";
        } else {
          ctr1.emptyMessage = " ";
        }
      });
    }

    ctr1.removeDontWant = function (index) {     
      ctr1.foundMenuList.splice(index,  1);    
      if (ctr1.foundMenuList.length == 0) {
        ctr1.emptyMessage = "Nothing Found!";
      }
    };

  };
}



MenuSearchServiceFn.$inject = ['$http'];
function MenuSearchServiceFn($http) { 
  var service = this;
  service.getMatchedMenuItems  = function (searchItem) {
    
    var menus = [];
    var response = $http(
      {
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      });
    return response;
  };
}

module.directive('foundItems',function(){
return {
   templateUrl:'found-items.html',
   controller:NarrowItDownControllerFn,
   bindToController:true,
   controllerAs:'ctr1',
   scope: {
      prop: '<',     
       },
    }
});
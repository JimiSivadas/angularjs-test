(function () {
'use strict';
angular.module('MenuApp').service("MenuDataService", MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) { 
  var service = this;
  service.getAllCategories   = function () {
    
    var categories = [];
    var response = $http(
      {
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      })
      
     return response;  
  }
   
  service.getItemsForCategory   = function(itemId) {
   
    var url="https://davids-restaurant.herokuapp.com/menu_items.json?category="+itemId
    var menus = [];
    var response = $http(
      {
        method: 'GET',
        url: url
      });
         return response;
  };
}

    })();
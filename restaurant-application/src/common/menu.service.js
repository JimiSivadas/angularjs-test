(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
var service = this;
service.user=null;
service.getCategories = function () {
return $http.get(ApiPath + '/categories.json').then(function (response) {
return response.data;
});
};


service.getMenuItems = function (category) {
var config = {};
if (category) {
config.params = {'category': category};
}
return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
return response.data;
});
};

service.saveUser = function (user){
service.user=user;
}

service.getUser =function(){
return service.user;
}

service.getMenus = function (itemId){
itemId= itemId.toUpperCase();
var url = ApiPath +'/menu_items/'+itemId+".json";
var menus = [];
var response = $http(
{
method: 'GET',
url: url
}).catch(function (error) {
console.log("Something went wrong in $http service level.")
});
service.response =response;
return response;
}

service.getItem = function (){
return service.response;
}
}

})();
(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ["MenuService"];
function RegistrationController(MenuService) {
  var regCtrl = this;
  regCtrl.completed = false;
  regCtrl.searched=false;
  regCtrl.submit = function (user,shortName) {
    
  if(shortName != undefined && shortName !=''){
  var promise= MenuService.getMenus(shortName.toUpperCase());
  promise.then(function success(response) {
  var menus = [];
  angular.forEach(response, function (value, key) {
  menus.push(value);    
  });
  regCtrl.menus=menus;
  regCtrl.searched=true;  
  })
    }else{
     regCtrl.searched=false;   
    }
  regCtrl.user =user;  
  MenuService.saveUser(user);
  regCtrl.completed = true;
  }
}

})();

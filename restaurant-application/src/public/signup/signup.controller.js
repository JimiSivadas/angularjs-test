(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ["menuItems","user",'ApiPath'];
function SignUpController(menuItems,user,ApiPath) {
var signCtrl = this;
signCtrl.menuItems=menuItems;
signCtrl.user=user;
signCtrl.basePath = ApiPath;
}

})();

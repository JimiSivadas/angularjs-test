var module = angular.module("myModule", []);
module.controller("MyController", MainFn);
function MainFn($scope) {
    $scope.checkIfTooMuch = function () {
        if ($scope.foodSelect != null) {
            $scope.message = checkForQuantity($scope.foodSelect);
        }
    };
}
function checkForQuantity(foodList) {
    var count = 0;
    var foods = foodList.split(',');
    for (var i = 0; i < foods.length; i++) {
        if (foods[i].trim() != '') {
            count++;
        }
    }
    if (foods.length <= 3) {
        message = "Enjoy!";
    } else {
        message = "Too Much!";
    }
    return message;
}



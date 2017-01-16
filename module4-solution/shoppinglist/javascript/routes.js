(function () {
'use strict';
angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'shoppinglist/templates/home-template.html'
  })


  .state('categories', {
    url: '/categories',
    templateUrl: 'shoppinglist/templates/categories-all.html',
    controller: 'MenuDataController as mainList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

.state('items', {
    url: '/items/{shortName}',
    templateUrl: 'shoppinglist/templates/items-all.html',
    controller: 'ItemController as itemCtrl',
     resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
    // resolve: {
    //   items: ['$stateParams', 'MenuDataService',
    //         function ($stateParams, MenuDataService) {
    //           return MenuDataService.getItemsForCategory();
    //             // .then(function (items) {
    //             //   return items[$stateParams.itemId];
    //             // });
    //         }]
    // }
  });

}

})();

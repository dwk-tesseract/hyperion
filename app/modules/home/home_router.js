(function() {

   angular
      .module('routeHome', ['ui.router'])
      .config(configProvider);

   ///////

   function configProvider($stateProvider) {
      "use strict";

      $stateProvider

         .state('home', {
            url: '/',
            views: {
               'main_content': {
                  templateUrl: 'modules/home/home.html',
                  controller: 'homeController'
               }
            },
            data: {
               mainSection: 'framework',
               pageTitle: 'Welcome to Hyperion',
               section: 'home'
            }
         });

   }

   configProvider.$inject = ['$stateProvider'];

})();
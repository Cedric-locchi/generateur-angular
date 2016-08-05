(function(angular){
    'use strict';

    /* @ngInject */
    angular.module('index', ['ui.router', 'ngSanitize']);

    angular.module('index')
    /* @ngInject */
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('index', {
                    url: '/',
                    templateUrl: 'app/js/index/templates/index.html'
                });

        }]);

})(window.angular);
(function(angular){
    'use strict';

    angular.module('news',['ui.router', 'ngSanitize']);

    angular.module('news')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('news', {
                    url: '/news',
                    templateUrl: 'app/js/news/templates/news.html',
                    controller: 'newsController'
                });

        }]);


})(window.angular);
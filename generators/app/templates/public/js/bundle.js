(function(angular){
    'use strict';

    angular.module('app', ['ui.router', 'ngSanitize', 'index', 'news']);

})(window.angular);
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
(function(angular){
    'use strict';

    angular.module('index')
        .controller('indexController', indexController);

        function indexController(){

        }

})(window.angular);
(function(angular){
    'use strict';

    angular.module('index')
        .factory('indexFactory', indexFactory);

        function indexFactory(){}

})(window.angular);
(function(angular){
    'use strict';

    angular.module('news')
        .controller('newsController', newsController);

        function newsController(){}

})(window.angular);
(function(angular){
    'use strict';

    angular.module('news')
        .factory('newsFactory', newsFactory);

        function newsFactory(){}

})(window.angular);
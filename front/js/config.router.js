'use strict';

/**
 * Config for the router
 */
app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        // APPLICATION ROUTES
        // -----------------------------------
        // For any unmatched url, redirect to /app/dashboard
        $urlRouterProvider.otherwise("home");
        //
        // Set up the states

        $stateProvider.state('home', {
            url: "/home",
            templateUrl: "./components/home/home.html",
            controller: "homeController",
            onEnter: function ($rootScope) {
                $rootScope.currTitle = "home";
            },
            onExit: function ($rootScope) {
                $rootScope.rootLoading = true;
            },
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            './components/home/home.controller.js',
                        ]
                    });
                }]
            }
        })

}]);

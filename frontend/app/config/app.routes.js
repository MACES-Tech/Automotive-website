angular.module('alBargasyApp').config(function ($routeProvider, $ocLazyLoadProvider) {

    $routeProvider.when('/home', {
        templateUrl: "./app/components/home/home.html",
        controller: 'homeController'
    }).when("/:brandName/models", {
        templateUrl: "./app/components/models/brand.models.html",
        controller: 'modelsController'
    }).when("/:brandName/models/:modelName", {
        templateUrl: "./app/components/models/single.models.html",
        controller: 'singleModelController'
    }).when("/notFound", {
        templateUrl: "./app/components/notFound/404.html",
    })
        .when('/:brandName/services', {
            templateUrl: "./app/components/car.service/services.html",
            controller: 'carServiceController',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            "./app/components/car.service/car.service.controller.js",
                            "./app/components/car.service/service/car.service.service.js"
                        ]
                    });
                }]
            }
        }).when('/account', {
            templateUrl: "./app/components/login.register/account.html",
            controller: 'loginRegisterController'
        }).when('/request_services', {
            templateUrl: "./app/components/car.service/request_service_list.html",
            controller: 'requestedServiceController',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            "./app/components/car.service/car.service.controller.js",
                            "./app/components/car.service/service/car.service.service.js",
                            "./app/components/car.service/requested.service.controller.js"
                        ]
                    });
                }]
            }
        }).when("/:brandName/spare_parts", {
            templateUrl: "./app/components/spareParts/brand.spareParts.html",
            controller: 'sparePartsController',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            "./app/components/contactUs/contact.controller.js",
                        ]
                    });
                }]
            }
        }).when('/', {
            redirectTo: "/home"
        }).when('/contact', {
            templateUrl: "./app/components/contactUs/contact.html",
            controller:"contactController"
        })
        .otherwise({
            redirectTo: "/notFound"
        });
});





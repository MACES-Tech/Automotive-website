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
        }).when('/my_account', {
            templateUrl: "./app/components/my.account/my.account.html",
            controller: 'myAccountController'
        }).when('/admin/request_services', {
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
        }).when('/admin/messages_list', {
            templateUrl: "./app/components/contactUs/messages_list.html",
            controller: 'contactController',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            "./app/components/contactUs/contact.controller.js",
                            "./app/components/contactUs/contact.service.js"
                        ]
                    });
                }]
            }
        }).when('/admin/subscribers_list', {
            templateUrl: "./app/components/contactUs/subscribers_list.html",
            controller: 'contactController',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            "./app/components/contactUs/contact.controller.js",
                            "./app/components/contactUs/contact.service.js"
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
            controller:"contactController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            "./app/components/contactUs/contact.controller.js",
                            "./app/components/contactUs/contact.service.js"
                        ]
                    });
                }]
            }
        }).when("/cars/compare", {
            templateUrl: "./app/components/vehicle.compare/vehicle-compare.html",
            controller:"vehicleCompareController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            "./app/components/vehicle.compare/vehicle.compare.controller.js",
                            "./app/components/models/service/brand.models.service.js"
                        ]
                    });
                }]
            }
        }).when('/cars/buy', {
            templateUrl: "./app/components/buy.car/buy.car.html",
            controller:"buyCarController"
        }).when('/cars/service', {
            templateUrl: "./app/components/car.service/general.cars.service.html",
            controller:"generalCarsServiceController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            "./app/components/car.service/service/car.service.service.js"
                        ]
                    });
                }]
            }
        })
        .otherwise({
            redirectTo: "/notFound"
        });
});





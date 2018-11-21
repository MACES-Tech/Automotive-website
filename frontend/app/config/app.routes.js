angular.module('alBargasyApp').config(function($routeProvider){

    $routeProvider.when('/home',{
        templateUrl:"./app/components/home/home.html",
        controller:'homeController'
    }).when("/:brandName/models",{
        templateUrl:"./app/components/models/brand.models.html",
        controller:'modelsController'
    }).when("/:brandName/models/:modelName",{
        templateUrl:"./app/components/models/single.models.html",
        controller:'singleModelController'
    }).when("/notFound",{
        templateUrl:"./app/components/notFound/404.html",
    })
    .when('/:brandName/services' ,{
            templateUrl:"./app/components/car.service/services.html",
            controller:'carServiceController'
    }).when('/account' ,{
        templateUrl:"./app/components/login.register/account.html",
        controller: 'loginRegisterController'
    }).when('/request_services' ,{
        templateUrl:"./app/components/car.service/request_service_list.html",
        controller: 'requestedServiceController'
    }).when("/:brandName/spare_parts",{
        templateUrl:"./app/components/spareParts/brand.spareParts.html",
        controller:'sparePartsController'
    })
    .otherwise({
        redirectTo:"/notFound"
    });
});





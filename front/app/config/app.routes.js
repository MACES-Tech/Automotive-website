angular.module('alBargasyApp').config(function($routeProvider){

    $routeProvider.when('/home',{
        templateUrl:"./app/components/home/home.html",
        controller:'homeController'
    })
    .when('/services/:id' ,{
            templateUrl:"./app/components/car.service/services.html"
            // controller:'ManageAccountController'
    }).when('/account' ,{
        templateUrl:"./app/components/login.register/account.html"
    })
    .otherwise({
        redirectTo:"/home"
    });
});





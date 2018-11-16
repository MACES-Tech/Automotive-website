angular.module('alBargasyApp').config(function($routeProvider){

    $routeProvider.when('/home',{
        templateUrl:"./app/components/home/home.html",
        controller:'homeController'
    }).when("/:brandName/models",{
        templateUrl:"./app/components/models/brand.models.html",
        controller:'modelsController'
    }).when("/notFound",{
        templateUrl:"./app/components/notFound/404.html",
    })

    // .when('/pgu/manageAccounts' ,{
    //         templateUrl:HTML_PATH.MANAGE_ACCOUNTS,
    //         controller:'ManageAccountController'
    //     })
    .otherwise({
        redirectTo:"/home"
    });
});





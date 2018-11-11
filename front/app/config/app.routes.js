angular.module('alBargasyApp').config(function($routeProvider){

    $routeProvider.when('/home',{
        templateUrl:"./app/components/home/home.html",
        controller:'homeController'
    })
    // .when('/pgu/manageAccounts' ,{
    //         templateUrl:HTML_PATH.MANAGE_ACCOUNTS,
    //         controller:'ManageAccountController'
    //     })
    .otherwise({
        redirectTo:"/home"
    });
});





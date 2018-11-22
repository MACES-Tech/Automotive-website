angular.module('alBargasyApp')
    .controller('appController', function ($http, $rootScope, $scope,$location,$cookies) {
       
        $rootScope.rootLoading = false;
    $rootScope.isSignedIn = function () {
        return $cookies.get('currentUser.token') !== undefined;
    }

    $rootScope.setcurrentUser = function (admin, token) {
        debugger
        $cookies.put("currentUser.object", admin);
        $cookies.put("currentUser.token", token);
        $location.path("/skoda/models");
    }

    $rootScope.getcurrentUser = function () {
        if ($rootScope.isSignedIn()) {
            return JSON.parse($cookies.get('currentUser.object'));
        } else {
            return "";
        }
    }

    $rootScope.isAdmin = function () {
        admin = $rootScope.getcurrentUser();
        if (admin && (admin.role == "admin")) {
            return true;
        }
        return false;
    }

    $rootScope.getCurrentToken = function () {
        return $cookies.get('currentUser.token');
    }

    $rootScope.unsetcurrentUser = function () {
        $cookies.remove('currentUser.object');
        $cookies.remove('currentUser.token');
    }

    $rootScope.signOut = function () {
        // signOutService.signOut(function (res, err) {
            // if (err) {
            //     console.log("error in signing out");
            // } else {
                $rootScope.unsetcurrentUser();
                $location.path('/skoda/models');
        //     }
        // });
    }
    $rootScope.$on('$locationChangeSuccess', function () {
        var url = window.location.href;
        if (url.indexOf("?#") === -1 && url.indexOf("#") !== -1)
            window.location.href = url.replace("#", "?#")

        $rootScope.rootLoading = false;
    });

    $rootScope.$on('$locationChangeSuccess', function () {
        $rootScope.rootLoading = false;
    });
});
angular.module('alBargasyApp')
    .controller('appController', function ($http, $rootScope, $scope,$location,$cookies,$translate,$route,$window) {
       
        $rootScope.default_float =  'float-r' ;
        $rootScope.FaceBookLink ="https://www.facebook.com/toyotaalbargasy/"
        $rootScope.rootLoading = false;
    $rootScope.isSignedIn = function () {
        return $cookies.get('currentUser.token') !== undefined;
    }

    $rootScope.setcurrentUser = function (admin, token) {
        $cookies.put("currentUser.object", admin);
        $cookies.put("currentUser.token", token);
        $location.path("/home");
    }
    $rootScope.updateCurrentUser = function (admin) {
        $cookies.put("currentUser.object", admin);        
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
                $location.path('/home');
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

    $rootScope.getPreffrerdLanguage = function() {
        var selectLang = "ar";
        if (localStorage.getItem("prefferedLanguage") != null) {
            selectLang = localStorage.getItem("prefferedLanguage");
        } else if ($cookies.get("prefferedLanguage") != null) {
            selectLang = $cookies.get("prefferedLanguage");
        }
        var langSmall = selectLang.toLowerCase();
        $rootScope.default_float = langSmall === 'ar' ? 'float-r' : 'float-l';
        $translate.use(langSmall);
        $rootScope.lang = langSmall;
        return selectLang;
    };
    $rootScope.setPrefferdLanguage = function(lang) {
        $window.location.reload();
        var langSmall = lang.toLowerCase();
        if (langSmall === 'en' || langSmall === 'ar') {
            // $translate.use(langSmall);
            $rootScope.default_float = langSmall === 'ar' ? 'float-r' : 'float-l';
            saveLangLocally(langSmall);
            $rootScope.lang = langSmall;
            
        }
        // defineChangeLanguageBroadCast(oldLang, newLang);
    };
    // function defineChangeLanguageBroadCast(oldLang, newLang) {
    //     if (oldLang != newLang) {
    //         $rootScope.$broadcast('changeLanguage', {});
    //     }
    // };
    function saveLangLocally(lang) {
        selectLang = lang;
        if (localStorage != undefined) {
            localStorage.setItem("prefferedLanguage", lang);
        } else {
            $cookies.put("prefferedLanguage", lang);
        }
    };
});
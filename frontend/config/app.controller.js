var app = angular.module('app');

var AppCtrlImp = function ( $http, $rootScope, $scope, $state, $translate, $window, $location, signOutService, inboxService, ROLES) {
    
 
    
        $rootScope.backendURL = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/";
    
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            if (next.indexOf("connectedUsers")) {
                $rootScope.rootLoading = false;
            } else {
                $rootScope.rootLoading = true;
            }
    
    
            if (next.indexOf("signin") === -1 && !$rootScope.isSignedIn()) {
                $rootScope.signOut();
            } else if (next.indexOf("signin") !== -1 && $rootScope.isSignedIn()) {
                $location.path('home');//TODO: entry?
            }
        });
    
        $rootScope.toggleClass = function () {
            $rootScope.mlCollapse = !$rootScope.mlCollapse;
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
    
        // State not found
        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
            //$rootScope.loading = false;
            console.log(unfoundState.to);
            // "lazy.state"
            console.log(unfoundState.toParams);
            // {a:1, b:2}
            console.log(unfoundState.options);
            // {inherit:false} + default options
        });
    
        $rootScope.pageTitle = function () {
            return $rootScope.app.name + ' - ' + ($rootScope.currTitle || "");
        };
    
        // Function that find the exact height and width of the viewport in a cross-browser way
        var viewport = function () {
            var e = window, a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        };
    
        // function that adds information in a scope of the height and width of the page
        $scope.getWindowDimensions = function () {
            return {
                'h': viewport().height,
                'w': viewport().width
            };
        };
    
        // Detect when window is resized and set some variables
        $scope.$watch($scope.getWindowDimensions, function (newValue, oldValue) {
            $scope.windowHeight = newValue.h;
            $scope.windowWidth = newValue.w;
    
            if (newValue.w >= 992) {
                $scope.isLargeDevice = true;
            } else {
                $scope.isLargeDevice = false;
            }
            if (newValue.w < 992) {
                $scope.isSmallDevice = true;
            } else {
                $scope.isSmallDevice = false;
            }
            if (newValue.w <= 768) {
                $scope.isMobileDevice = true;
            } else {
                $scope.isMobileDevice = false;
            }
        }, true);    
}


app.controller('AppCtrl', [
    '$http',
    '$rootScope', 
    '$scope', 
    '$state', 
    '$translate', 
    '$window', 
    '$location', 
    'signOutService', 
    'inboxService',
    'ROLES', 
    AppCtrlImp]);
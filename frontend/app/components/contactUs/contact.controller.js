angular.module('alBargasyApp')
    .controller('contactController', function ($rootScope, $scope, $location) {
        $scope.init = function () {
             $rootScope.currentTab = "contact";
            }

        $scope.init();


})
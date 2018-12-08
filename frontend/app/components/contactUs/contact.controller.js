angular.module('alBargasyApp')
    .controller('contactController', function ($rootScope, $scope, $location) {
        $scope.init = function () {
             $rootScope.currentTab = "contact";
             $rootScope.FaceBookLink = "";
            }

        $scope.init();


})
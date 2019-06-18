angular.module('alBargasyApp')
    .controller('groupManagementController', function ($filter,$rootScope, $scope) {
        var $translate = $filter('translate');

        $scope.init = function (page) {
             $rootScope.currentTab = "group_management";
             $rootScope.FaceBookLink = "";
        }

        
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/dataTable.js";

            document.head.appendChild(script);
        }
        $scope.init();
})
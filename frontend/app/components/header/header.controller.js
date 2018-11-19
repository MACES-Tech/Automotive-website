angular.module('alBargasyApp')
    .controller('headerController', function ($rootScope, $scope, $location, brandModelsService) {
       
        $scope.goToAccountPage = function(){
            $location.path("/account");
        }
        $scope.init = function () {
                brandModelsService.getAllBrands(function(res, err){
                    if(res.data.length > 0 ){
                        $scope.brands = res.data;
                    }else{

                    }
                })
           
        }

        $scope.init();
});
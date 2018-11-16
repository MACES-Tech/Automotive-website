angular.module('alBargasyApp')
    .controller('modelsController', function ($rootScope, $scope, $location, $routeParams, brandModelsService) {
        $scope.carModels =[];
        $scope.init = function () {
            
            if ($routeParams.brandName) {
                //get an existing object
                brandModelsService.getCarBrandByName($routeParams.brandName,function(res, err){
                    if(!err){
                        if(res.data.length > 0 &&res.status ===200){
                            $scope.carbrand = res.data[0];
                            $rootScope.currentTab = $scope.carbrand.name;
                            brandModelsService.getAllModels($scope.carbrand.id,function(res,err){
                                if(!err){
                                    $scope.carModels = res.data;
                                }
                            })

                        }else{
                            $rootScope.redirectTo404()
                        }
                    }else{
                        $rootScope.redirectTo404()
                    }
                })
            } else {
                $rootScope.redirectTo404()
            }
        }

        
        $scope.init();
       
    });

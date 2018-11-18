angular.module('alBargasyApp')
    .controller('singleModelController', function ($window,$rootScope, $scope, $location, $routeParams, brandModelsService,SweetAlert,Upload) {
        $scope.carModel ={};
        $scope.init = function () {
            if ($routeParams.brandName) {
                //get an existing object
                brandModelsService.getCarBrandByName($routeParams.brandName,function(res, err){
                    if(!err){
                        if(res.data.length > 0 &&res.status ===200){
                            $scope.carbrand = res.data[0];
                            $rootScope.currentTab = $scope.carbrand.name;
                            if ($routeParams.modelName) {
                                brandModelsService.getModelByName($routeParams.modelName,function(res,err){
                                    if(!err){
                                        $scope.carModel = res.data;
                                    }
                                })
                            }else{
                                $rootScope.redirectTo404()
                            }
                            

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

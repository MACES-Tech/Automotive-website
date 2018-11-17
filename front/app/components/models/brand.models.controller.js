angular.module('alBargasyApp')
    .controller('modelsController', function ($rootScope, $scope, $location, $routeParams, brandModelsService,SweetAlert) {
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

        $scope.confirmPopup = function(modelId){
            SweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this operation!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel please!",
                closeOnConfirm: false,
                closeOnCancel: false }, 
             function(isConfirm){ 
                if (isConfirm) {
                    $scope.deleteIt(modelId)
                } else {
                   SweetAlert.swal("Cancelled", "Your imaginary data is safe :)", "error");
                }
             });
        }
        $scope.deleteIt = function(modelId){
            brandModelsService.deleteModelById(modelId,function(res,err){
                if(!err){
                    SweetAlert.swal("Deleted!", "Your data has been deleted.", "success");
                    brandModelsService.getAllModels($scope.carbrand.id,function(res,err){
                        if(!err){
                            $scope.carModels = res.data;
                        }
                    })
                }
            })
        }
        $scope.openFileUploader = function(){
            document.getElementById('ImageUploader1').click();

        }
        $scope.onFilesSelected = function (files) {
                $scope.filesSelected = files;
                $scope.$apply();
        }
        $scope.addNewCarModel = function(model){
            modelObject = {name:model.name, arName:model.arName, mainImage:$scope.filesSelected,brandId:$scope.carbrand.id};
            brandModelsService.creatNewModel(modelObject,function(p){
                alert(p);
            })
        }
        $scope.init();
       
    });

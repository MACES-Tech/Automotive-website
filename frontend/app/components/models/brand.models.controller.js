angular.module('alBargasyApp')
    .controller('modelsController', function ($window,$rootScope, $scope, $location, $routeParams, brandModelsService,SweetAlert,Upload) {
        $scope.carModels =[];
        $scope.up = {};
        $scope.model = {};
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
        $scope.addNewCarModel = function(up,model){

            Upload.upload({
                url: $rootScope.backendURL +'upload', //webAPI exposed to upload the file
                data:{file:up.file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if(resp.data.error_code === 0){ //validate success                    
                    modelObject = {name:model.name, arName:model.arName, mainImage:resp.data.insertedFile.id,brandId:$scope.carbrand.id};
                    brandModelsService.creatNewModel(modelObject,function(res,err){
                        if(!err){
                            SweetAlert.swal("Good job!", "The car added successfully", "success");
                            brandModelsService.getAllModels($scope.carbrand.id,function(res,err){
                                if(!err){
                                    $scope.carModels = res.data;
                                }
                            })
                            model.arName="";
                            model.name="";
                            $scope.progress = "";
                            $scope.up = {}
                            
                        }else{
                            SweetAlert.swal("Error", "an error occuers", "error");
                        }
                    })
                } else {
                    SweetAlert.swal("Error", "an error occuers", "error");

                }
            }, function (resp) { //catch error
                // console.log('Error status: ' + resp.status);
                // $window.alert('Error status: ' + resp.status);
                SweetAlert.swal("Error", "an error occuers", "error");
            }, function (evt) { 
                // console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
            });
        }

        $scope.editmodel = function(model){
            $scope.model.name = model.name;
            $scope.model.arName = model.arName;
        }
        $scope.init();
       
    });
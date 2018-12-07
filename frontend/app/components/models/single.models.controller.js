angular.module('alBargasyApp')
    .controller('singleModelController', function ($window,$rootScope, $scope, $location, $routeParams,$route, brandModelsService,SweetAlert,Upload,galleryService) {
        $scope.carModel ={};
        $scope.slider = {};
        $scope.body={};
        $scope.brochures={};
        $scope.lang = $rootScope.getPreffrerdLanguage();
        $scope.init = function () {
            if ($routeParams.brandName) {
                //get an existing object
                console.log($routeParams.brandName)
                brandModelsService.getCarBrandByName($routeParams.brandName,function(res, err){
                    if(!err){
                        if(res.data.length > 0 &&res.status ===200){
                            $scope.carbrand = res.data[0];
                            $rootScope.currentTab = $scope.carbrand.name;
                            if ($routeParams.modelName) {
                                brandModelsService.getModelByName($routeParams.modelName,function(res,err){
                                    if(!err){
                                        $scope.carModel = res.data;
                                        // $scope.carModel.sections.forEach(section => {
                                        //     if(section.firstHeader === "slider"){
                                        //         $scope.slider = (section);
                                        //     }
                                        //     if(section.firstHeader === "body"){
                                        //         $scope.body =(section);
                                        //     }
                                        //     if(section.firstHeader === "brochures"){
                                        //         $scope.brochures =(section);
                                        //     }
                                        // });
                                        $scope.reloadScripts();
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

        $scope.confirmPopup = function(galleryId){
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
                    $scope.deleteIt(galleryId)
                } else {
                   SweetAlert.swal("Cancelled", "Your imaginary data is safe :)", "error");
                }
             });
        }
        $scope.deleteIt = function(galleryId){
            galleryService.deletegalleryById(galleryId,function(res,err){
                if(!err){
                    SweetAlert.swal("Deleted!", "Your data has been deleted.", "success");
                    $route.reload();
                }
            })
        }
        $scope.openFileUploader = function(id){
            document.getElementById(id).click();

        }
        $scope.addNewImageToSection = function(up,sectionId){
            Upload.upload({
                url: $rootScope.backendURL +'upload', //webAPI exposed to upload the file
                data:{file:up.file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if(resp.data.error_code === 0){
                    insertedFile = resp.data.insertedFile
                    galleryObject = {fileId:insertedFile.id, sectionId:sectionId}
                    galleryService.addImageToGallery(galleryObject,function(res,err){
                        if(!err){
                            SweetAlert.swal("Good job!", "The Image added successfully", "success");
                            $route.reload();                        
                        }

                    })
                }
            })
        }
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/script.js";

            document.head.appendChild(script);
        }
        $scope.init();
       
    });

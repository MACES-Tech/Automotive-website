angular.module('alBargasyApp')
    .controller('buyCarController', function ($window, $rootScope, $scope, $location, $routeParams, brandModelsService, SweetAlert, Upload) {
        $scope.carModels = [];
        $scope.extraFeatures = [];
        $scope.up = {};
        $scope.model = {};
        $scope.model.usedCar = 0;
        $scope.lang = $rootScope.getPreffrerdLanguage();
        $scope.user = $rootScope.getcurrentUser();
        console.log("saved",$rootScope.getcurrentUser())
        $rootScope.currentTab = "cars";
        $scope.brands = [];
        $scope.isUsedCarFilter = null;
        $scope.carBrandId = null;
        $scope.goToCarPage = function (carBrandId, carModel) {
            for (var i = 0; i < $scope.brands.length; i++) {
                if ($scope.brands[i].id == carBrandId) {
                    $location.path('/' + $scope.brands[i].name + '/models/' + carModel);
                }
            }

        }
        if ($scope.user != "") {
            if ($scope.user.role == "user")
                $scope.model.usedCar = 1;
            console.log("$scope.model.usedCar ",$scope.user)
        }
        $scope.switchTabCar = function (isUsed) {
            $scope.isUsedCarFilter = isUsed;
            $scope.init($scope.carBrandId, $scope.isUsedCarFilter)
        }

        $scope.init = function (carBrandId, isUsedCar) {
            $rootScope.FaceBookLink = "";
            var filterObject = {};
            if (carBrandId)
                filterObject.carBrandId = carBrandId;
            filterObject.usedCar = isUsedCar;
            filterObject.isPublished = true;
            $scope.carModels = [];
            $scope.extraFeatures = [];
            brandModelsService.getAllModelsWithoutBrand(filterObject, function (res, err) {
                if (!err) {
                    $scope.carModels = res.data;
                    brandModelsService.getAllExtraFeatures(function (res, err) {
                        if (!err) {
                            $scope.extraFeatures = res.data;
                        }
                    })
                }
            })
        }

        $scope.confirmPopup = function (modelId) {
            SweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this operation!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55", confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel please!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
                function (isConfirm) {
                    if (isConfirm) {
                        $scope.deleteIt(modelId)
                    } else {
                        SweetAlert.swal("Cancelled", "Your imaginary data is safe :)", "error");
                    }
                });
        }
        $scope.deleteIt = function (modelId) {
            brandModelsService.deleteModelById(modelId, function (res, err) {
                if (!err) {
                    SweetAlert.swal("Deleted!", "Your data has been deleted.", "success");
                    $scope.init($scope.carBrandId, $scope.isUsedCarFilter)
                }
            })
        }
        $scope.openFileUploader = function () {
            document.getElementById('ImageUploader1').click();

        }
        $scope.onFilesSelected = function (files) {
            $scope.filesSelected = files;
            $scope.$apply();
        }
        $scope.addNewCarModel = function (up, model) {
            console.log(up)
            if (!model.id) {
                Upload.upload({
                    url: $rootScope.backendURL + 'upload', //webAPI exposed to upload the file
                    data: { file: up.file } //pass file as data, should be user ng-model
                }).then(function (resp) { //upload function returns a promise
                    if (resp.data.error_code === 0) { //validate success
                        modelObject = { name: model.name, arName: model.arName, arFirstParagraph: model.arFirstParagraph, firstParagraph: model.firstParagraph, mainImage: resp.data.insertedFile.id, brandId: $scope.model.carBrand, price: model.price };
                        if ($scope.model.usedCar == 1)
                            modelObject.usedCar = $scope.model.usedCar;
                        else
                            modelObject.usedCar = null;
                        modelObject.userId = $scope.user.id;
                        if ($scope.user.role == 'user')
                            modelObject.isPublished = false;
                        else
                            modelObject.isPublished = true;
                        modelObject.exchange = model.exchange;
                        modelObject.keyFeatures = model.keyFeatures;
                        modelObject.extraFeatures = [];
                        $scope.extraFeatures.forEach(element => {
                            if (element.selected) {
                                modelObject.extraFeatures.push(element.id);
                            }
                        });
                        brandModelsService.creatNewModel(modelObject, function (res, err) {
                            if (!err) {
                                SweetAlert.swal("Good job!", "The car added successfully", "success");
                                $scope.init($scope.carBrandId, $scope.isUsedCarFilter)
                                $scope.forceClearAllData(model)

                            } else {
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
            } else {
                console.log(up)
                if (!up.file) {
                    console.log('edit only');
                    modelObject = { id: model.id, name: model.name, arName: model.arName, arFirstParagraph: model.arFirstParagraph, firstParagraph: model.firstParagraph, brandId: $scope.model.carBrand, price: model.price };
                    if ($scope.model.usedCar == 1)
                        modelObject.usedCar = $scope.model.usedCar;
                    else
                        modelObject.usedCar = null;
                    modelObject.userId = $scope.user.id;
                    if ($scope.user.role == 'user')
                        modelObject.isPublished = false;
                    else
                        modelObject.isPublished = true;
                    modelObject.exchange = model.exchange;
                    modelObject.keyFeatures = model.keyFeatures;
                    modelObject.extraFeatures = [];
                    $scope.extraFeatures.forEach(element => {
                        if (element.selected) {
                            modelObject.extraFeatures.push(element.id);
                        }
                    });
                    brandModelsService.editModel(modelObject, function (res, err) {
                        if (!err) {
                            SweetAlert.swal("Good job!", "The car updated successfully", "success");
                            $scope.init($scope.carBrandId, $scope.isUsedCarFilter)
                            $scope.forceClearAllData(model)


                        } else {
                            SweetAlert.swal("Error", "an error occuers", "error");
                        }
                    })

                } else {
                    console.log('edit with file');
                    Upload.upload({
                        url: $rootScope.backendURL + 'upload', //webAPI exposed to upload the file
                        data: { file: up.file } //pass file as data, should be user ng-model
                    }).then(function (resp) { //upload function returns a promise
                        if (resp.data.error_code === 0) { //validate success                    
                            modelObject = { id: model.id, name: model.name, arName: model.arName, arFirstParagraph: model.arFirstParagraph, firstParagraph: model.firstParagraph, mainImageId: resp.data.insertedFile.id, brandId: $scope.model.carBrand, price: model.price };
                            if ($scope.model.usedCar == 1)
                                modelObject.usedCar = model.usedCar;
                            else
                                modelObject.usedCar = null;
                            modelObject.userId = $scope.user.id;
                            if ($scope.user.role == 'user')
                                modelObject.isPublished = false;
                            else
                                modelObject.isPublished = true;
                            modelObject.exchange = model.exchange;
                            modelObject.keyFeatures = model.keyFeatures;
                            modelObject.extraFeatures = [];
                            $scope.extraFeatures.forEach(element => {
                                if (element.selected) {
                                    modelObject.extraFeatures.push(element.id);
                                }
                            });
                            brandModelsService.editModel(modelObject, function (res, err) {
                                if (!err) {
                                    SweetAlert.swal("Good job!", "The car updated successfully", "success");
                                    $scope.init($scope.carBrandId, $scope.isUsedCarFilter)
                                    $scope.forceClearAllData(model)


                                } else {
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
            }
        }
        $scope.toggleEf = function (index) {
            if ($scope.extraFeatures[index].selected) {
                if ($scope.extraFeatures[index].selected == true)
                    $scope.extraFeatures[index].selected = false;
                if ($scope.extraFeatures[index].selected == false)
                    $scope.extraFeatures[index].selected = true;
            } else {
                $scope.extraFeatures[index].selected = true;
            }
        }
        $scope.clearData = function (model) {
            SweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this operation!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55", confirmButtonText: "Yes, clear the form!",
                cancelButtonText: "No, cancel please!",
                closeOnConfirm: true,
                closeOnCancel: true
            },
                function (isConfirm) {
                    if (isConfirm) {
                        $scope.forceClearAllData(model)
                    }
                });

        }
        $scope.addNewExtraFeature = function (extraFeature) {
            object = { title: extraFeature.name, arTitle: extraFeature.arabicName }
            brandModelsService.createNewExtraFeature(object, function (res, err) {
                if (!err) {
                    createdObject = res.data;
                    $scope.extraFeatures.push(createdObject);
                    extraFeature.name = "";
                    extraFeature.arabicName = "";
                } else {
                    SweetAlert.swal("Error", "an error occuers", "error");
                }
            })
        }
        $scope.forceClearAllData = function (model) {
            model.id = "";
            model.arName = "";
            model.name = "";
            model.arFirstParagraph = "";
            model.firstParagraph = "";
            model.price = "";
            $scope.progress = "";
            $scope.up = {}
            model.keyFeatures = {};
            model.options = {};
        }
        $scope.editmodel = function (model) {
            $scope.model.id = model.id;
            $scope.model.name = model.name;
            $scope.model.arName = model.arName;
            $scope.model.price = model.price;
            $scope.model.arFirstParagraph = model.arFirstParagraph;
            $scope.model.firstParagraph = model.firstParagraph;
            $scope.model.keyFeatures = model.keyFeatures;
            $scope.model.carBrand = model.carBrandId;
            $scope.model.usedCar = model.usedCar;
        }
        brandModelsService.getAllBrands(function (res, err) {
            if (res.data.length > 0) {
                $scope.brands = res.data;
                $scope.init();
            } else {
                SweetAlert.swal("Error", "an error occuers", "error");
            }
        })


    });

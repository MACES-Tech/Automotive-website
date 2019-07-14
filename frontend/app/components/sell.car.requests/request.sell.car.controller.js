angular.module('alBargasyApp')
    .controller('requestedCellCarsController', function ($window, $rootScope, $scope, $location, $routeParams, brandModelsService, SweetAlert, Upload) {
        $scope.carModels = [];
        $scope.extraFeatures = [];
        $scope.up = {};
        $scope.model = {};
        $scope.model.usedCar = 0;
        $scope.lang = $rootScope.getPreffrerdLanguage();
        $scope.user = $rootScope.getcurrentUser();
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
        }
        
        $scope.init = function (carBrandId, isUsedCar) {
            $rootScope.FaceBookLink = "https://www.facebook.com/toyotaalbargasy/";
            var filterObject = {};
            filterObject.usedCar = 1;
            filterObject.isPublished = false;
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
                    $scope.init()
                }
            })
        }
        $scope.publishCar = function(modelId){
            var object = {id:modelId,isPublished:true};
            brandModelsService.editModel(object, function (res, err) {
                if (!err) {
                    SweetAlert.swal("Good job!", "The car Published successfully", "success");
                    $scope.init()
                    $scope.forceClearAllData(model)


                } else {
                    SweetAlert.swal("Error", "an error occuers", "error");
                }
            })
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
        brandModelsService.getAllBrands(function (res, err) {
            if (res.data.length > 0) {
                $scope.brands = res.data;
                $scope.init();
            } else {
                SweetAlert.swal("Error", "an error occuers", "error");
            }
        })

    });

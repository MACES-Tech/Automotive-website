angular.module('alBargasyApp')
    .controller('requestedExchangeCarsController', function ($window, $rootScope, $scope, $location, $routeParams, brandModelsService, SweetAlert, Upload) {
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
        
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/script.js";

            document.head.appendChild(script);
        }

        $scope.init = function (carBrandId, isUsedCar) {
            $rootScope.FaceBookLink = "https://www.facebook.com/toyotaalbargasy/";
            var filterObject = {};
            filterObject.usedCar = 1;
            filterObject.isPublished = false;
            filterObject.exchange = true;
            $scope.carModels = [];
            $scope.extraFeatures = [];
            brandModelsService.getAllModelsWithoutBrand(filterObject, function (res, err) {
                $scope.reloadScripts();
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
        brandModelsService.getAllBrands(function (res, err) {
            if (res.data.length > 0) {
                $scope.brands = res.data;
                $scope.init();
            } else {
                SweetAlert.swal("Error", "an error occuers", "error");
            }
        })
        

    });

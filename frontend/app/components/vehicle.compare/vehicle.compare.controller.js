angular.module('alBargasyApp')
    .controller('vehicleCompareController', function ($window,$rootScope, $scope, $location, $routeParams,$route, brandModelsService,SweetAlert,Upload,galleryService) {
        $scope.brands=[];
        $scope.models1=[];
        $scope.models2=[];
        $scope.extraFeatures=[];
        $scope.selectedBrand1="-1";
        $scope.selectedBrand2="-1";
        $scope.selectedModel1="-1";
        $scope.selectedModel2="-1";
        $scope.startCompare = {};
        $scope.compare1={};
        $scope.compare2={};
        $scope.init = function () {
            $rootScope.FaceBookLink = "https://www.facebook.com/toyotaalbargasy/";
            $rootScope.currentTab = "cars";
            $scope.startCompare = false;
            brandModelsService.getAllBrands(function(res,err){
                if(!err){
                    $scope.brands=res.data;
                    
                    // $scope.reloadScripts();
                }
            })
            $scope.reloadScripts();
        }
        $scope.changeInBrandList = function(listId,selectedBrand){
            selectedBrandJson = JSON.parse(selectedBrand)
            brandModelsService.getAllModels(selectedBrandJson.id,function(res,err){
                if(!err){
                    if(listId ==1){
                        $scope.models1=res.data;
                        $scope.selectedModel1="-1";
                    }else{
                        $scope.models2=res.data;
                        $scope.selectedModel2="-1";
                    }
                    
                }
            })
        }
        $scope.startCompareFunction = function(car1,car2){
            console.log(car1);
            console.log(car2);
            if(car1 && car2 && car1!="-1" && car2!="-1"){
                $scope.compare1 = JSON.parse(car1);
                $scope.compare2 = JSON.parse(car2)
                $scope.startCompare = true;
                brandModelsService.getAllExtraFeatures(function(res,err){
                    if(!err){
                        $scope.extraFeatures = res.data;
                        brandModelsService.getExtraFeaturesByCarId($scope.compare1.id,function(res,err){
                            if(!err){
                                $scope.compare1.extraFeatures = res.data;
                                brandModelsService.getExtraFeaturesByCarId($scope.compare2.id,function(res,err){
                                    if(!err){
                                        $scope.compare2.extraFeatures = res.data;
                                        
                                    }
                                })

                            }
                        })
                    }
                })
            }
            
            
        }
        $scope.checkForExtraFeature = function(featureList,featureId){
            found = false
            featureList.forEach(element => {
                if(element.id === featureId){
                    found = true;
                }
            });
            return found;
        }
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/script.js";

            document.head.appendChild(script);
        }
        $scope.init();

    });

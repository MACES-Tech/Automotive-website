angular.module('alBargasyApp')
    .controller('homeController', function ($rootScope, $scope, $location,brandModelsService) {
        $rootScope.currentTab = "home";
          $scope.init = function(){
            brandModelsService.getAllModelsWithoutBrand({},function(res,err){
                if(!err){
                    $scope.carModels = res.data;
                    // brandModelsService.getAllExtraFeatures(function(res,err){
                    //     if(!err){
                    //         $scope.extraFeatures = res.data;
                    //     }
                    // })
                    $scope.reloadScripts();
                }
            })
          }
          $scope.init();
          $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/script.js";

            document.head.appendChild(script);
        }
    });

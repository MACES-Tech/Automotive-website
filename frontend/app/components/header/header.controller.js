angular.module('alBargasyApp')
    .controller('headerController', function ($rootScope, $scope, $location, brandModelsService) {
        $scope.lang = $rootScope.getPreffrerdLanguage ();
        $scope.goToAccountPage = function(){
            $location.path("/account");
        }
        $scope.toggle = {};
        if($scope.lang=='ar'){
            $scope.toggle.switch = true;
        }else{
            $scope.toggle.switch = false;
        }
        
        $scope.init = function () {
                brandModelsService.getAllBrands(function(res, err){
                    if(res.data.length > 0 ){
                        $scope.brands = res.data;
                    }else{

                    }
                })
           
        }
        $scope.changeLang = function(l){
            $scope.toggle.switch = l;
            if($scope.toggle.switch){
                $rootScope.setPrefferdLanguage('ar')
            }else{
                $rootScope.setPrefferdLanguage('en')
            }
        }
        $rootScope.$on('$routeChangeStart', function (next, last) {
            debugger
            if($('.preloader').length){
                $('.preloader').delay(2).fadeOut(500);
            }
         });

        

        $scope.init();
});
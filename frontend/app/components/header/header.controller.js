angular.module('alBargasyApp')
    .controller('headerController', function ($rootScope, $scope, $location, brandModelsService) {
        $scope.lang = $rootScope.getPreffrerdLanguage ();
        $scope.goToAccountPage = function(){
            $location.path("/account");
        }
        $scope.goToMyAccount = function(){
            $location.path("/my_account");
        }
        $scope.toggle = {};
        if($scope.lang=='ar'){
            $scope.class = 'modify';
            $scope.toggle.switch = true;
        }else{
            $scope.toggle.switch = false;
            $scope.class = '';
        }
        
        $scope.init = function () {
            $rootScope.FaceBookLink="https://www.facebook.com/toyotaalbargasy/";
                brandModelsService.getAllBrands(function(res, err){
                    if(res && res.data && res.data.length > 0 ){
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
            if($('.preloader').length){
                $('.preloader').delay(2).fadeOut(500);
            }
         });

        

        $scope.init();
});
angular.module('alBargasyApp')
    .controller('loginRegisterController', function ($rootScope, $scope, $location, loginRegisterService) {
        $scope.email = "";
        $scope.password = "";

        $scope.login = function(email,password){
            debugger
            if(!email){

            }else if (!password){

            }else{
                var loginObject = {"email":email,"password":password}
                loginRegisterService.login(loginObject,function(res,err){
                    if(err){

                    }
                    console.log(res);
                });
            }
        }
});
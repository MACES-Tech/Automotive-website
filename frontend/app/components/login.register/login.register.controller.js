angular.module('alBargasyApp')
    .controller('loginRegisterController', function ($rootScope, $scope, $location, loginRegisterService) {
        $scope.email = "";
        $scope.password = "";
        $scope.registerModel = {
            name:"",
            phone:"",
            email:"",
            password:""
        }
        $scope.login = function(email,password){
            if(!email){

            }else if (!password){

            }else{
                var loginObject = {"email":email,"password":password}
                loginRegisterService.login(loginObject,function(res,err){
                    if(err){

                    }else{
                        $rootScope.setcurrentUser(JSON.stringify(res.data.user), res.data.token);
                    }
                    
                });
            }
        }
        $scope.register = function(name , email,password,phone){
            debugger
            if(!email){

            }else if (!password){

            }else if(!name){

            }else if(!phone){

            }else{
                var registerObject = {"email":email,"password":password,"name":name,"phone":phone,"role":"user"};
                loginRegisterService.register(registerObject,function(res,err){
                    if(err){

                    }else{
                        $rootScope.setcurrentUser(JSON.stringify(res.data.user), res.data.token);
                    }
                    
                });
            }
        }
});
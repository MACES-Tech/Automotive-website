angular.module('alBargasyApp')
    .controller('loginRegisterController', function ($rootScope, $scope, $location, loginRegisterService,SweetAlert) {
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
                SweetAlert.swal("Error", "an error occuers email", "error");
            }else if (!password){
                SweetAlert.swal("Error", "an error occuers password", "error");
            }else{
                var loginObject = {"email":email,"password":password}
                loginRegisterService.login(loginObject,function(res,err){
                    if(err){
                        SweetAlert.swal("Error", "an error occuers", "error");
                    }else{
                        $rootScope.setcurrentUser(JSON.stringify(res.data.user), res.data.token);
                    }
                    
                });
            }
        }
        $scope.register = function(name , email,password,phone){
            debugger
            if(!email){
                SweetAlert.swal("Error", "an error occuers email", "error");
            }else if (!password){
                SweetAlert.swal("Error", "an error occuers passsword", "error");
            }else if(!name){
                SweetAlert.swal("Error", "an error occuers name", "error");
            }else if(!phone){
                SweetAlert.swal("Error", "an error occuers phone", "error");
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
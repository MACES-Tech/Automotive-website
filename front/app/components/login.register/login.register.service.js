var app = angular.module('alBargasyApp');

app.service('loginRegisterService' , function ($http, $rootScope) {
    this.login = function (loginObject ,cb) {
        // $http({
        //     method: 'POST',
        //     url: $rootScope.backendURL + "login",
        //     data: loginObject
        // }).then(
        //     function successCallback(res) {
        //         if (res.status == 500) {
        //             cb(null, res);
        //         } else {
        //             cb(res);
        //         }
        //     },
        //     function errorCallback(err) {
        //         cb(null, err);
        //     })
        var fd = new FormData();
        fd.append('data', angular.toJson(loginObject));
        $http.post($rootScope.backendURL + "login", fd, {
            headers: {'Content-Type': "application/json"}
       })
        .success(function(res){
            cb(res);
        })
        .error(function(){
        });
    };

});
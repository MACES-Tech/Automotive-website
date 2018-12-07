var app = angular.module('alBargasyApp');

app.service('myAccountService' , function ($http, $rootScope) {
    this.saveUser = function(user,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "update_user",
            data:JSON.stringify(user)
        }).then(
            function successCallback(res) {
                if (res.status == 500) {
                    cb(null, res);
                } else {
                    cb(res);
                }
            },
            function errorCallback(err) {
                cb(null, err);
            })
    };
   
});
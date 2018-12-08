var app = angular.module('alBargasyApp');

app.service('contactService', function ($http, $rootScope) {
    var self = this;

    self.creatNewMsg = function(msg,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "msg",
            data:JSON.stringify(msg)
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
    self.getAllMessages = function (typeId,cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "msg/"+typeId,
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
})
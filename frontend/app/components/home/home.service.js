var app = angular.module('alBargasyApp');

app.service('homeService', function ($http, $rootScope) {
    var self = this;

    
    self.creatNewSlider = function(model,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "slider",
            data:JSON.stringify(model)
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
    self.creatNewAboutUs = function(model,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "aboutUs",
            data:JSON.stringify(model)
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
    self.editAbout = function(model,cb){
        $http({
            method: 'PUT',
            url: $rootScope.backendURL + "aboutUs/" + model.id,
            data:JSON.stringify(model)
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
    self.editSlide = function(model,cb){
        $http({
            method: 'PUT',
            url: $rootScope.backendURL + "slider/" + model.id,
            data:JSON.stringify(model)
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
    self.deleteImageById= function (modelId,cb) {
        $http({
            method: 'DELETE',
            url: $rootScope.backendURL + "slider/" + modelId,
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

    self.getAllSlider = function(cb){
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "slider"
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

    self.getAboutUs = function(cb){
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "aboutUs"
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
var app = angular.module('alBargasyApp');

app.service('brandModelsService', function ($http, $rootScope) {
    var self = this;

    self.getCarBrandByName = function (brandName ,cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "carBrand/name/"+brandName,
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

    self.getAllBrands = function (cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "carBrand/",
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

    

    return self;
});
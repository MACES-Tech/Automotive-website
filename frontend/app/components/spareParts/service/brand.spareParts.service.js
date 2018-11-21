var app = angular.module('alBargasyApp');

app.service('brandSparePartsService', function ($http, $rootScope) {
    var self = this;




    self.getAllSpareParts = function (carBrandId,cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "carBrand/"+carBrandId+"/spareParts",
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

    self.deleteSparePartsById = function (modelId,cb) {
        $http({
            method: 'DELETE',
            url: $rootScope.backendURL + "spareParts/" + modelId,
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
    self.creatNewSparePart = function(model,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "spareParts",
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
    self.editSparePart = function(model,cb){
        $http({
            method: 'PUT',
            url: $rootScope.backendURL + "spareParts/" + model.id,
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
    
    return self;
});
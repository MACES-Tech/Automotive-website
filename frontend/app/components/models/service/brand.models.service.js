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

    self.getAllModels = function (carBrandId,cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "carBrand/"+carBrandId+"/carModel",
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

    self.getAllModelsWithoutBrand = function (cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "carModel",
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

    self.deleteModelById = function (modelId,cb) {
        $http({
            method: 'DELETE',
            url: $rootScope.backendURL + "carModel/" + modelId,
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
    self.creatNewModel = function(model,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "carModel",
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
    self.createNewExtraFeature = function(extraFeature,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "extraFeatures",
            data:JSON.stringify(extraFeature)
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
    }
    self.getAllExtraFeatures = function(cb){
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "extraFeatures",
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
    }
    self.getExtraFeaturesByCarId = function(id,cb){
        $http({
            method: 'GET',
            url: $rootScope.backendURL +id+ "/extraFeatures",
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
    }
    self.editModel = function(model,cb){
        $http({
            method: 'PUT',
            url: $rootScope.backendURL + "carModel/" + model.id,
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
    
    self.getModelByName = function(modelName,cb){
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "carModel/name/"+modelName,
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
var app = angular.module('alBargasyApp');

app.service('carServiceService', function ($http, $rootScope) {
    var self = this;

    self.getCarServices = function (carbrandId ,cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "carBrand/"+carbrandId+"/carService",
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
    self.createService = function (service ,cb) {
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "carService",
            data:JSON.stringify(service)
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

    self.updateService = function (service ,cb) {
        $http({
            method: 'PUT',
            url: $rootScope.backendURL + "carService/"+service.id,
            data:JSON.stringify(service)
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
    self.deleteServiceById = function (serviceId,cb) {
        $http({
            method: 'DELETE',
            url: $rootScope.backendURL + "service/" + serviceId,
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

    self.requestNewService = function (service ,cb) {
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "services",
            data:JSON.stringify(service)
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
    self.deleteRequestedServiceById = function (serviceId,cb) {
        $http({
            method: 'DELETE',
            url: $rootScope.backendURL + "services/" + serviceId,
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
    self.getAllRequestedServices = function (cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "services",
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
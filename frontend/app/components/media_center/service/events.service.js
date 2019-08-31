var app = angular.module('alBargasyApp');

app.service('mediaCenterEventService', function ($http, $rootScope) {
    var self = this;

    self.addEventToGallery = function(event,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "media_center/event",
            data:JSON.stringify(event)
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

    
    self.getAllEvents = function (cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "media_center/event",
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
    self.deleteEventById = function (eventId,cb) {
        $http({
            method: 'DELETE',
            url: $rootScope.backendURL + "media_center/event/" + eventId,
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
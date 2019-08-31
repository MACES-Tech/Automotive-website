var app = angular.module('alBargasyApp');

app.service('mediaCenterGalleryService', function ($http, $rootScope) {
    var self = this;

    self.addImageToGallery = function(gallery,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "media_center/gallery",
            data:JSON.stringify(gallery)
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

    
    self.getAllImages = function (cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "media_center/gallery",
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
    self.deletegalleryById = function (galleryId,cb) {
        $http({
            method: 'DELETE',
            url: $rootScope.backendURL + "media_center/gallery/" + galleryId,
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
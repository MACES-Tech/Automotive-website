var app = angular.module('alBargasyApp');

app.service('galleryService', function ($http, $rootScope) {
    var self = this;

    self.addImageToGallery = function(gallery,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "gallery",
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

    self.deletegalleryById = function (galleryId,cb) {
        $http({
            method: 'DELETE',
            url: $rootScope.backendURL + "gallery/" + galleryId,
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
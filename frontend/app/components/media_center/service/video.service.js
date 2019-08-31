var app = angular.module('alBargasyApp');

app.service('mediaCenterVideoService', function ($http, $rootScope) {
    var self = this;

    self.addVideoToGallery  = function(video,cb){
        $http({
            method: 'POST',
            url: $rootScope.backendURL + "media_center/video",
            data:JSON.stringify(video)
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

    
    self.getAllVideos= function (cb) {
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "media_center/video",
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
    self.deleteVideoById = function (videoId,cb) {
        $http({
            method: 'DELETE',
            url: $rootScope.backendURL + "media_center/video/" + videoId,
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
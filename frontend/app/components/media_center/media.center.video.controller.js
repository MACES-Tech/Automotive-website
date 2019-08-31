angular.module('alBargasyApp')
    .controller('mediaCenterVideoController', function ($filter,$rootScope, $scope, $sce, mediaCenterVideoService, SweetAlert ,$route) {
        var $translate = $filter('translate');
       
        // $scope.current = 0;

        $scope.init = function (page) {
             $rootScope.currentTab = "media";
             $rootScope.FaceBookLink = "https://www.facebook.com/toyotaalbargasy/";
             mediaCenterVideoService.getAllVideos(function(res,err){
              if(!err){
                var videos = [];
                res = res.data;
                res.forEach(o => {
                    videos.push($sce.trustAsResourceUrl(o.url))
                });
                $scope.videos = videos;
              }
             })
        }
        
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/dataTable.js";

            document.head.appendChild(script);
        }
        $scope.init();

        $scope.videoUrl = "";
        $scope.addNewVideoToGallery = function(videoUrl){
            videoObject = {url:videoUrl}
            mediaCenterVideoService.addVideoToGallery(videoObject,function(res,err){
                if(!err){
                    SweetAlert.swal("Good job!", "The Video added successfully", "success");
                    $route.reload();                        
                }

            })
        }
})
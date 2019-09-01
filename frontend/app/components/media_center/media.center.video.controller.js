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
                    videos.push({url:$sce.trustAsResourceUrl(o.url), id: o.id})
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

        $scope.confirmPopup = function (modelId) {
            SweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this operation!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55", confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel please!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
                function (isConfirm) {
                    if (isConfirm) {
                        $scope.deleteIt(modelId)
                    } else {
                        SweetAlert.swal("Cancelled", "Your imaginary data is safe :)", "error");
                    }
                });
        }
        $scope.deleteIt = function (modelId) {
            debugger;
            mediaCenterVideoService.deleteVideoById(modelId, function (res, err) {
                if (!err) {
                    SweetAlert.swal("Deleted!", "Your data has been deleted.", "success");
                    $scope.init($scope.carBrandId, $scope.isUsedCarFilter)
                }
            })
        }
})
angular.module('alBargasyApp')
    .controller('mediaCenterEventController', function ($filter,$rootScope, $scope, Upload, mediaCenterEventService, SweetAlert ,$route) {
        var $translate = $filter('translate');
          
        $scope.init = function (page) {
             $rootScope.currentTab = "media";
             $rootScope.FaceBookLink = "https://www.facebook.com/toyotaalbargasy/";
             mediaCenterEventService.getAllEvents(function(res,err){
              if(!err){
                var events = [];
                res = res.data;
                $scope.images = res;
              }
             })
        }
        
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/dataTable.js";

            document.head.appendChild(script);
        }
        $scope.init();


        $scope.addNewEventToGallery = function(up, titleAr, titleEn, descrAr, descrEn){
            Upload.upload({
                url: $rootScope.backendURL +'upload', //webAPI exposed to upload the file
                data:{file:up.file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if(resp.data.error_code === 0){
                    insertedFile = resp.data.insertedFile
                    eventObject = {fileId:insertedFile.id, titleAr: titleAr, titleEn: titleEn, descrAr: descrAr, descrEn: descrEn}
                    mediaCenterEventService.addEventToGallery(eventObject,function(res,err){
                        if(!err){
                            SweetAlert.swal("Good job!", "The Event added successfully", "success");
                            $route.reload();                        
                        }

                    })
                }
            })
        }
})
angular.module('alBargasyApp')
    .controller('mediaCenterEventController', function ($filter,$rootScope, $scope, Upload, mediaCenterEventService, SweetAlert ,$route) {
        var $translate = $filter('translate');
          
        $scope.init = function (page) {
             $rootScope.currentTab = "media";
             $rootScope.FaceBookLink = "https://www.facebook.com/toyotaalbargasy/";
             mediaCenterEventService.getAllEvents(function(res,err){
                 $scope.reloadScripts();
              if(!err){
                var events = [];
                res = res.data;
                $scope.events = res;
              }
             })
        }
        
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/dataTable.js";

            document.head.appendChild(script);

                var script2 = document.createElement('script');
    
                script2.src = "assets/js/script.js";
    
                document.head.appendChild(script2);
        }
        $scope.init();
        $scope.model = {};


        $scope.openFileUploader = function(id){
            document.getElementById(id).click();

        }

        $scope.addNewEventToSlider = function(up, eventObject){
            Upload.upload({
                url: $rootScope.backendURL +'upload', //webAPI exposed to upload the file
                data:{file:up.file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if(resp.data.error_code === 0){
                    insertedFile = resp.data.insertedFile
                    eventObject.fileId = insertedFile.id; //{fileId:insertedFile.id, titleAr: titleAr, titleEn: titleEn, descrAr: descrAr, descrEn: descrEn}
                    mediaCenterEventService.addEventToGallery(eventObject,function(res,err){
                        if(!err){
                            SweetAlert.swal("Good job!", "The Event added successfully", "success");
                            $route.reload();                        
                        }

                    })
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
            mediaCenterEventService.deleteEventById(modelId, function (res, err) {
                if (!err) {
                    SweetAlert.swal("Deleted!", "Your data has been deleted.", "success");
                    $scope.init($scope.carBrandId, $scope.isUsedCarFilter)
                }
            })
        }
})
angular.module('alBargasyApp')
    .controller('mediaCenterController', function ($filter,$rootScope, $scope, Upload, mediaCenterGalleryService, SweetAlert ,$route) {
        var $translate = $filter('translate');
          
        $scope.current = 0;
        $scope.init = function (page) {
             $rootScope.currentTab = "media";
             $rootScope.FaceBookLink = "https://www.facebook.com/toyotaalbargasy/";
             mediaCenterGalleryService.getAllImages(function(res,err){
              if(!err){
                var images = [];
                res = res.data;
                res.forEach(o => {
                  images.push({src: '/uploads/' + o.file.path})
                });
                $scope.images = images;
              }
             })
        }

        $scope.getIndex = function(img) {
            $scope.current = this.images.indexOf(img);
            
          }
          $scope.nextImage = function() {
            $scope.current += 1; 
             if ($scope.current===$scope.images.length)
             $scope.current = 0;
           }
        
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/dataTable.js";

            document.head.appendChild(script);
        }
        $scope.init();


        $scope.openFileUploader = function(id){
            document.getElementById(id).click();

        }
        $scope.addNewImageToGallery = function(up){
            Upload.upload({
                url: $rootScope.backendURL +'upload', //webAPI exposed to upload the file
                data:{file:up.file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if(resp.data.error_code === 0){
                    insertedFile = resp.data.insertedFile
                    galleryObject = {fileId:insertedFile.id}
                    mediaCenterGalleryService.addImageToGallery(galleryObject,function(res,err){
                        if(!err){
                            SweetAlert.swal("Good job!", "The Image added successfully", "success");
                            $route.reload();                        
                        }

                    })
                }
            })
        }
})
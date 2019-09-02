angular.module('alBargasyApp')
    .controller('requestedServiceController', function ($scope,carServiceService,SweetAlert,$rootScope) {
        $rootScope.currentTab = "admin";
        $scope.init = function () {
            $rootScope.FaceBookLink = "https://www.facebook.com/toyotaalbargasy/";
            $scope.allRequestedServices = [];
            carServiceService.getAllRequestedServices(function(res,err){
                if(!err){
                    $scope.allRequestedServices = res.data;
                    $scope.reloadScripts();
                }else{
                    SweetAlert.swal("Error", "an error occuers", "error");
                }
            })
        }
        $scope.init();
        
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/dataTable.js";

            document.head.appendChild(script);

            var script2 = document.createElement('script');

            script2.src = "assets/js/script.js";

            document.head.appendChild(script2);
        }
        
        $scope.confirmPopup = function(serviceId){
            SweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this operation!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel please!",
                closeOnConfirm: false,
                closeOnCancel: false }, 
             function(isConfirm){ 
                if (isConfirm) {
                    $scope.deleteIt(serviceId)
                } else {
                   SweetAlert.swal("Cancelled", "Your imaginary data is safe :)", "error");
                }
             });
        }
        $scope.deleteIt = function(serviceId){
            carServiceService.deleteRequestedServiceById(serviceId,function(res,err){
                if(!err){
                    SweetAlert.swal("Deleted!", "Your data has been deleted.", "success");
                    $scope.init();
                }else{
                    SweetAlert.swal("Error", "an error occuers", "error");
                }
            })
        }
});
angular.module('alBargasyApp')
    .controller('requestedServiceController', function ($scope,carServiceService,SweetAlert) {
        
        $scope.init = function () {
            $scope.allRequestedServices = [];
            carServiceService.getAllRequestedServices(function(res,err){
                if(!err){
                    $scope.allRequestedServices = res.data;
                }else{
                    SweetAlert.swal("Error", "an error occuers", "error");
                }
            })
        }
        $scope.init();
        

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
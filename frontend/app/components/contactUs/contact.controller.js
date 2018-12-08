angular.module('alBargasyApp')
    .controller('contactController', function ($filter,$rootScope, $scope,SweetAlert, $location,contactService) {
        var $translate = $filter('translate');

        $scope.allMsgs = [];
        $scope.init = function (page) {
             $rootScope.currentTab = "contact";
             $rootScope.FaceBookLink = "";
             if(page =="messages_list"){
                $rootScope.currentTab ="admin"
                $scope.typeId = 1;
             }
             else if(page =="subscribers_list"){
                $rootScope.currentTab ="admin"
                $scope.typeId = 2;
             }
             contactService.getAllMessages($scope.typeId,function(res,err){
                 if(!err){
                    $scope.allMsgs = res.data;
                    $scope.reloadScripts();
                }
             })
        }

        $scope.sendMsg = function(msg,type){
            msg.type = type;
            contactService.creatNewMsg(msg,function(res,err){
                if(!err){
                    SweetAlert.swal({title:$translate('service_sucess_msg_title'), text:$translate('sucess_msg'), icon:"success",confirmButtonText:$translate('service_sucess_msg_button')});

                }else{
                    SweetAlert.swal({title:$translate('error'), text:$translate('error_msg'), icon:"error",confirmButtonText:$translate('service_sucess_msg_button')});

                }
            })
            if(type ==1)
                $scope.msg={};
            else
                $scope.sub={};
        }
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "assets/js/dataTable.js";

            document.head.appendChild(script);
        }
        $scope.init();


})
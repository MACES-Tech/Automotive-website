angular.module('alBargasyApp').controller('sparePartsController',function($window,$rootScope,$scope,$location,$routeParams,brandSparePartsService,brandModelsService,SweetAlert,Upload){$scope.carModels=[];$scope.up={};$scope.model={};$scope.lang=$rootScope.getPreffrerdLanguage();
$scope.reloadScripts = function(){
    var script = document.createElement('script');

    script.src = "assets/js/script.js";

    document.head.appendChild(script);
}
$scope.init=function(){$scope.reloadScripts();
     if($routeParams.brandName){brandModelsService.getCarBrandByName($routeParams.brandName,function(res,err){if(!err){if(res.data.length>0&&res.status===200){$scope.carbrand=res.data[0];if($scope.carbrand.name==="skoda"){$rootScope.FaceBookLink="https://www.facebook.com/SkodaAlBargasy/"}else if($scope.carbrand.name==="toyota"){$rootScope.FaceBookLink="https://www.facebook.com/Toyota.albargasy.3s/"}else{$rootScope.FaceBookLink="https://www.facebook.com/toyotaalbargasy/"}
$rootScope.currentTab=$scope.carbrand.name;$rootScope.currentTabType = 'spare_parts';brandSparePartsService.getAllSpareParts($scope.carbrand.id,function(res,err){if(!err){$scope.carModels=res.data;}})}else{$rootScope.redirectTo404()}}else{$rootScope.redirectTo404()}})}else{$rootScope.redirectTo404()}}
$scope.confirmPopup=function(modelId){SweetAlert.swal({title:"Are you sure?",text:"Your will not be able to recover this operation!",type:"warning",showCancelButton:true,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel please!",closeOnConfirm:false,closeOnCancel:false},function(isConfirm){if(isConfirm){$scope.deleteIt(modelId)}else{SweetAlert.swal("Cancelled","Your imaginary data is safe :)","error");}});}
$scope.deleteIt=function(modelId){brandSparePartsService.deleteSparePartsById(modelId,function(res,err){if(!err){SweetAlert.swal("Deleted!","Your data has been deleted.","success");brandSparePartsService.getAllSpareParts($scope.carbrand.id,function(res,err){if(!err){$scope.carModels=res.data;}})}})}
$scope.openFileUploader=function(){document.getElementById('ImageUploader1').click();}
$scope.onFilesSelected=function(files){$scope.filesSelected=files;$scope.$apply();}
$scope.addNewCarSparePart=function(up,model){console.log(up)
if(model.price==undefined){model.price=0;}
if(model.available==undefined){model.available=false;}
if(!model.id){Upload.upload({url:$rootScope.backendURL+'upload',data:{file:up.file}}).then(function(resp){if(resp.data.error_code===0){modelObject={name:model.name,arName:model.arName,price:model.price,mainImageId:resp.data.insertedFile.id,carBrandId:$scope.carbrand.id,available:model.available};brandSparePartsService.creatNewSparePart(modelObject,function(res,err){if(!err){SweetAlert.swal("Good job!","The Spare Part added successfully","success");brandSparePartsService.getAllSpareParts($scope.carbrand.id,function(res,err){if(!err){$scope.carModels=res.data;}
$scope.forceClearAllData(model)})}else{SweetAlert.swal("Error","an error occuers","error");}})}else{SweetAlert.swal("Error","an error occuers","error");}},function(resp){SweetAlert.swal("Error","an error occuers","error");},function(evt){var progressPercentage=parseInt(100.0*evt.loaded/evt.total);$scope.progress='progress: '+progressPercentage+'% ';});}else{console.log(up)
if(!up.file){console.log('edit only');modelObject={id:model.id,name:model.name,arName:model.arName,price:model.price,carBrandId:$scope.carbrand.id,available:model.available};brandSparePartsService.editSparePart(modelObject,function(res,err){if(!err){SweetAlert.swal("Good job!","The spare part updated successfully","success");brandSparePartsService.getAllSpareParts($scope.carbrand.id,function(res,err){if(!err){$scope.carModels=res.data;}
$scope.forceClearAllData(model)})}else{SweetAlert.swal("Error","an error occuers","error");}})}else{console.log('edit with file');Upload.upload({url:$rootScope.backendURL+'upload',data:{file:up.file}}).then(function(resp){if(resp.data.error_code===0){modelObject={id:model.id,name:model.name,arName:model.arName,price:model.price,mainImageId:resp.data.insertedFile.id,carBrandId:$scope.carbrand.id,available:model.available};brandSparePartsService.editSparePart(modelObject,function(res,err){if(!err){SweetAlert.swal("Good job!","The spare part updated successfully","success");brandSparePartsService.getAllSpareParts($scope.carbrand.id,function(res,err){if(!err){$scope.carModels=res.data;}
$scope.forceClearAllData(model)})}else{SweetAlert.swal("Error","an error occuers","error");}})}else{SweetAlert.swal("Error","an error occuers","error");}},function(resp){SweetAlert.swal("Error","an error occuers","error");},function(evt){var progressPercentage=parseInt(100.0*evt.loaded/evt.total);$scope.progress='progress: '+progressPercentage+'% ';});}}}
$scope.clearData=function(model){SweetAlert.swal({title:"Are you sure?",text:"Your will not be able to recover this operation!",type:"warning",showCancelButton:true,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, clear the form!",cancelButtonText:"No, cancel please!",closeOnConfirm:true,closeOnCancel:true},function(isConfirm){if(isConfirm){$scope.forceClearAllData(model)}});}
$scope.forceClearAllData=function(model){model.id="";model.arName="";model.name="";model.price="";$scope.progress="";$scope.up={}}
$scope.editSparePart=function(model){$scope.model.id=model.id;$scope.model.name=model.name;$scope.model.arName=model.arName;$scope.model.price=model.price;$scope.model.available=model.available;}
$scope.init();});
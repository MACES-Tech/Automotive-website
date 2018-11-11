'use strict';
angular.module('alBargasyApp').directive('ckeditor', function($timeout) {
    var calledEarly, loaded;
    loaded = false;
    calledEarly = false;

    return {
        restrict: 'E',
        templateUrl: 'assets/libs/ckeditor.livrable/ckeditor.livrable.templateUrl.html',
        require: '?ngModel',
        replace: false,
        transclude: true,
        link: function(scope, elm, attrs, ngModel) {
            scope.ckeditorId = attrs.id;
            var ck;
            if (!ngModel) {
                return;
            }
            var ckConfigAttr = JSON.parse((attrs.config) ? attrs.config : "{}");

            ckConfigAttr['extraPlugins'] = "copyformatting,imagepaste";
            ck = CKEDITOR.replace(scope.ckeditorId, ckConfigAttr);

            ck.on('pasteState', function() {
                scope.$apply(function() {
                    ngModel.$setViewValue(ck.getData());
                });
            });

            ngModel.$render = function(value) {
                ck.setData(ngModel.$viewValue);
            };
        }
    };
});
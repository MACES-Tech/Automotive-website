(function() {

    var app = angular.module('alBargasyApp');
    app.directive('header', function () {
        
        return {
            restrict: 'EA', //Default in 1.3+
            scope: {
                datasource: '=',
                add: '&',
            },
            controller: 'headerController',
            templateUrl: './app/components/header/header.html'
        };
    });
  
  }());
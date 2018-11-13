'use strict';
var app = angular.module('alBargasyApp');


function headerImp () {
    return {
        restrict: 'AE',
        controller: 'headerController',
        templateUrl: './app/components/header/header.html'
    };
}

app.directive('header', headerImp);

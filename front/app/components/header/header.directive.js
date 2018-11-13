'use strict';
var app = angular.module('alBargasyApp');


function headerImp () {
    return {
        templateUrl: './app/components/header/header.html'
        // template: 'sadasdasdasd'
    };
}

app.directive('headerPanel', headerImp);

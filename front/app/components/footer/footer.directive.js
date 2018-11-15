'use strict';
var app = angular.module('alBargasyApp');


function footerImp () {
    return {
        templateUrl: './app/components/footer/footer.html',
        controller: 'footerController'
    };
}

app.directive('footerPanel', footerImp);

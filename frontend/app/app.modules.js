'use strict'
var app = angular.module('alBargasyApp',
        [
    'ngRoute','oitozero.ngSweetAlert','ngFileUpload','ngCookies','oc.lazyLoad','pascalprecht.translate'
]).run(function($rootScope , $location,$http) {
    $rootScope.goToHome = function(){
        $location.path("/home");
    }
    $rootScope.redirectTo404=function(){
      $rootScope.currentTab ="";
      $location.path ('/notFound');
    }
  // $rootScope.isAdmin=function(){
  //   return true;
  // }
  $rootScope.goTopage = function(PageName){
    $location.path(PageName);
}
    $rootScope.backendURL = $location.protocol() + "://" + $location.host() + ":"+ $location.port() +"/api/" ;
    $rootScope.currentTab ="skoda";

    $http.defaults.headers.post['Content-Type'] = 'application/json';

})

app.config(['$httpProvider', '$compileProvider', function ($httpProvider, $compileProvider) {
  $httpProvider.interceptors.push('APIInterceptor');
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
}]);

app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'config/translation/',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('ar');
}]);

app.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});
'use strict'
var app = angular.module('alBargasyApp',
        [
    
    'ngRoute'
]).run(function($rootScope , $location) {
    $rootScope.goToHome = function(){
        $location.path("/home");
    }
    $rootScope.redirectTo404=function(){
      $rootScope.currentTab ="";
      $location.path ('/notFound');
  }
    $rootScope.backendURL = $location.protocol() + "://" + $location.host() + ":4000/api/" ;
    $rootScope.currentTab ="skoda"

});

app.config(function ($httpProvider) {
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8;';
});


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
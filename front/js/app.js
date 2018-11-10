var app = angular.module('app', [
  'ui.router'
]);



app.config(['$httpProvider', '$compileProvider', function ($httpProvider, $compileProvider) {
  $httpProvider.interceptors.push('APIInterceptor');
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
}]);

app.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    // Set some reference to access them from any scope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    // GLOBAL APP SCOPE
    // set below basic information
    $rootScope.app = {
      name: 'Al bargasy automotive', // name of your project
      author: '', // author's name or company name
      description: 'APP DESCRIPTION', // brief description
      version: '1.0', // current version
      year: ((new Date()).getFullYear()) // automatic current year (for copyright information)
    };
  }
]);

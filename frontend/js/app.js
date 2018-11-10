var app = angular.module('app', [
  'ui.router',
  'oc.lazyLoad',
  'pascalprecht.translate',
  'ngMaterial'
]);

app.directive('toggleClass', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.bind('click', function () {
        element.toggleClass(attrs.toggleClass);
      });
    }
  };
});


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
      year: ((new Date()).getFullYear()), // automatic current year (for copyright information)
      isMobile: (function () { // true if the browser is a mobile device
        var check = false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          check = true;
        };
        return check;
      })(),
    };
  }
]);

// https://angular-translate.github.io/docs/#/guide/15_custom-interpolators
app.factory('customInterpolation', ['$interpolate', function ($interpolate) {
  var $locale;
  return {
    setLocale: function (locale) {
      $locale = locale;
    },
    getInterpolationIdentifier: function () {
      return 'custom';
    },
    interpolate: function (string, interpolateParams, context, sanitizeStrategy, translationId) {
      // return $locale + '_' + $interpolate(string)(interpolateParams, sanitizeStrategy) + '_' + $locale;
      // return $locale + '_' + [string, interpolateParams, sanitizeStrategy].join('+') + '_' + $locale;
      return $locale + '_INTERPOLED_' + $locale;
    }
  };
}]);
// https://angular-translate.github.io/docs/#/guide
app.config(['$translateProvider', function ($translateProvider) {

  $translateProvider.useStaticFilesLoader({
    prefix: 'config/translation/',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('ar');
}]);

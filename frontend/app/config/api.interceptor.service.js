var app = angular.module('alBargasyApp');

function APIInterceptorImp($rootScope) {
    this.request = function (config) {	
				$rootScope.rootLoading = true;
		if (config.url.indexOf($rootScope.backendURL) > -1) {
				if ($rootScope.isSignedIn()) {
						config.headers.Authorization = "JWT " + $rootScope.getCurrentToken();
				}
		}
			return config;
    };

    this.response = function (response) {
			
			$rootScope.rootLoading = false;
			return response;
    };

    this.responseError = function (response) {
		$rootScope.rootLoading = false;
		if (response.status == 802 && $rootScope.isSignedIn()) {
			// $rootScope.$broadcast("clearValidateionInput");	
			// $rootScope.showModal("notify-alert", response.status, function () {
			// 	$rootScope.hideModal();
			// 	$rootScope.signOut();
			// });
			
		} else {
			if (response.status == 404 || response.status == 500 || response.status == 401) {
		
			}
		}
		return response;
    };
}

app.service('APIInterceptor', ['$rootScope', APIInterceptorImp]);

'use strict';
/* jshint validthis: true */
(function () {
    angular.module('livrableTranslate', ['ngCookies', 'pascalprecht.translate']);
    function TranslateProviderConfig($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/resources/locale/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('fr');
        /*
         * strategy of escaping html
         * https://angular-translate.github.io/docs/#/guide/19_security
         */
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
    };
    angular.module('livrableTranslate').config(['$translateProvider', TranslateProviderConfig]);
    angular.module('livrableTranslate').service('TranslateService', TranslateService);

    function TranslateService($cookies, $translate, $rootScope) {
        var selectLang = "FR";
        return {
            getPreffrerdLanguage: getPreffrerdLanguage,
            setPrefferdLanguage: setPrefferdLanguage,
            getTransaledInstanceByKey: getTransaledInstanceByKey
        };
        function getPreffrerdLanguage() {
            if (localStorage.getItem("prefferedLanguage") != null) {
                selectLang = localStorage.getItem("prefferedLanguage");
            } else if ($cookies.get("prefferedLanguage") != null) {
                selectLang = $cookies.get("prefferedLanguage");
            }
            $translate.use(selectLang.toLowerCase());
            return selectLang;
        };
        function setPrefferdLanguage(lang) {
            var langSmall = lang.toLowerCase();
            var oldLang = selectLang.toLowerCase();
            var newLang = langSmall;
            if (langSmall === 'fr' || langSmall === 'en') {
                $translate.use(langSmall);
                saveLangLocally(lang);
            }
            defineChangeLanguageBroadCast(oldLang, newLang);
        };
        function defineChangeLanguageBroadCast(oldLang, newLang) {
            if (oldLang != newLang) {
                $rootScope.$broadcast('changeLanguage', {});
            }
        };
        function saveLangLocally(lang) {
            selectLang = lang;
            if (localStorage != undefined) {
                localStorage.setItem("prefferedLanguage", lang);
            } else {
                $cookies.put("prefferedLanguage", lang);
            }
        };
        function getTransaledInstanceByKey(key) {
            return $translate.instant(key);
        };
    }
})();

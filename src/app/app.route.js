angular.module('cwbApp').config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/bu_management', {
            templateUrl: '/dist/assets/templates/bu_management.html',
            activetab: 'BU Management'
        })
        .when('/user_management', {
            template: 'test2'
        })
        .when('/i18n', {
            template: 'test3'
        })
        .otherwise('/bu_management');
    $locationProvider.html5Mode(true);
});
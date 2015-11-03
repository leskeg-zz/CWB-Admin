angular.module('cwbApp').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider
        .when('/', 'bu_management')
        .when('/user_management', 'user_management')
        .when('/i18n', 'i18n')
        .otherwise('/');

    $stateProvider
        .state('bu_management', {
            url: '/bu_management',
            templateUrl: '/dist/assets/templates/bu_management.html'
        })
        .state('user_management', {
            url: '/user_management',
            templateUrl: '/dist/assets/templates/user_management.html'
        })
        .state('i18n', {
            url: '/i18n',
            templateUrl: '/dist/assets/templates/i18n.html'
        });

    $locationProvider.html5Mode(true);
});
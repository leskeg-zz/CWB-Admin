angular.module('cwbApp').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider
        .when('/', '/bu_management')
        .when('/bu_management', 'bu_management/list')
        .when('/user_management', 'user_management/list')
        .when('/i18n', 'i18n')
        .otherwise('/');

    $stateProvider
        .state('bu_management',         {url: '/bu_management', templateUrl: '/dist/assets/templates/bu_management.html'})
        .state('bu_management.list',    {url: '/list',          templateUrl: '/dist/assets/templates/bu_list.html'})
        .state('bu_management.details', {url: '/details',       templateUrl: '/dist/assets/templates/bu_details.html'})
        .state('bu_management.assets',  {url: '/assets',        templateUrl: '/dist/assets/templates/bu_assets.html'})
        .state('bu_management.modules', {url: '/modules',       templateUrl: '/dist/assets/templates/bu_modules.html'})

        .state('user_management',               {url: '/user_management',   templateUrl: '/dist/assets/templates/user_management.html'})
        .state('user_management.list',          {url: '/list',              templateUrl: '/dist/assets/templates/user_list.html'})
        .state('user_management.list-domain',   {url: '/list-domain',       templateUrl: '/dist/assets/templates/user_list_domains.html'})
        .state('user_management.roles',         {url: '/roles',             templateUrl: '/dist/assets/templates/user_roles.html'})
        .state('user_management.role-groups',   {url: '/role_groups',       templateUrl: '/dist/assets/templates/user_role_groups.html'})

        .state('i18n', {url: '/i18n', templateUrl: '/cwb/dist/assets/templates/i18n.html'});

    $locationProvider.html5Mode(true);
});
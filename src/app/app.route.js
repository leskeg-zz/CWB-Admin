angular.module('cwbApp').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider
        .when('/', '/bu_management')
        .when('/bu_management', 'bu_management/list')
        .when('/user_management', 'user_management/list')
        .when('/i18n', 'i18n')
        .otherwise('/');

    $stateProvider
        .state('bu_management',               {url: '/bu_management',   templateUrl: '/dist/assets/templates/bu_management.html',     controller: 'BuManagementController as vm'})
        .state('bu_management.list',          {url: '/list',            templateUrl: '/dist/assets/templates/bu_list.html',           controller: 'BuListController as vm'})
        .state('bu_management.details',       {url: '/details',         templateUrl: '/dist/assets/templates/bu_details.html',        controller: 'BuDetailsController as vm'})
        .state('bu_management.assets',        {url: '/assets',          templateUrl: '/dist/assets/templates/bu_assets.html',         controller: 'BuAssetsController as vm'})
        .state('bu_management.modules',       {url: '/modules',         templateUrl: '/dist/assets/templates/bu_modules.html',        controller: 'BuModulesController as vm'})

        .state('user_management',             {url: '/user_management', templateUrl: '/dist/assets/templates/user_management.html',   controller: 'UserManagementController as vm'})
        .state('user_management.list',        {url: '/list',            templateUrl: '/dist/assets/templates/user_list.html',         controller: 'UserListController as vm'})
        .state('user_management.list-domain', {url: '/list-domain',     templateUrl: '/dist/assets/templates/user_list_domains.html', controller: 'UserListDomainController as vm'})
        .state('user_management.roles',       {url: '/roles',           templateUrl: '/dist/assets/templates/user_roles.html',        controller: 'UserRolesController as vm'})
        .state('user_management.role-groups', {url: '/role_groups',     templateUrl: '/dist/assets/templates/user_role_groups.html',  controller: 'UserRoleGroupsController as vm'})

        .state('i18n',                        {url: '/i18n',            templateUrl: '/dist/assets/templates/i18n.html'});

    $locationProvider.html5Mode(true);
});
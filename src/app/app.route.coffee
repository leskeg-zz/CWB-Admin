config = ($stateProvider, $urlRouterProvider, $locationProvider)->
  bu_management = 
    url: '/bu_management'
    templateUrl: '/dist/assets/templates/bu_management.html'

  user_management = 
    url: '/user_management'
    template: 'test2'

  i18n = 
    url: '/i18n'
    template: 'test3'

  $urlRouterProvider
    .when('/', 'bu_management')
    .when('/user_management', 'user_management')
    .when('/i18n', 'i18n')
    .otherwise('/')

  $stateProvider
    .state('bu_management', bu_management)
    .state('user_management', user_management)
    .state('i18n', i18n)

  $locationProvider.html5Mode(true)

  return

angular
  .module('cwbApp')
  .config(config)
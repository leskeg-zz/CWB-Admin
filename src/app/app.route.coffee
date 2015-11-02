config = ($routeProvider, $locationProvider)->
  bu_management =
    templateUrl: '/dist/assets/templates/bu_management.html'
    activetab: 'BU Management'

  user_management =
    template: 'test2'

  i18n =
    template: 'test3'

  $routeProvider
    .when('/bu_management', bu_management)
    .when('/user_management', user_management)
    .when('/i18n', i18n)
    .otherwise('/bu_management')

  $locationProvider.html5Mode(true)

  return

angular
  .module('cwbApp')
  .config(config)
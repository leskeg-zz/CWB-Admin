config = ($routeProvider, $locationProvider)->
  bu_management = 
    templateUrl: '/dist/assets/templates/bu_management.html'
    activetab: 'BU Management'

  $routeProvider
    .when('/bu_management', bu_management)
    .otherwise('/bu_management')

  $locationProvider.html5Mode(true)

  return

angular
  .module('cwbApp')
  .config(config)
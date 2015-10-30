cwbHeader = () ->
  directive = 
    restrict: 'E',
    templateUrl: '/dist/app/cwbHeader/header.directive.html',
    scope: {
      role: '@'
    }

  return directive

angular
  .module 'cwbApp'
  .directive 'cwbHeader', cwbHeader
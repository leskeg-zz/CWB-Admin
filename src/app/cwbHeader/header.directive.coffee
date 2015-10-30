cwbHeader = () ->
  directive = 
    restrict: 'E',
    templateUrl: '/dist/app/cwbHeader/cwbHeader.directive.html',
    scope: {
      role: '@'
    }

  return directive

angular
  .module 'cwbApp'
  .directive 'cwbHeader', cwbHeader
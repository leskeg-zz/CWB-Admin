cwbNavTab = () ->

  directive = 
    restrict: 'E',
    templateUrl: '/dist/app/cwbNavTab/cwbNavTab.directive.html',
    controller: 'CwbNavController as vm'

  return directive

angular
  .module 'cwbApp'
  .directive 'cwbNavTab', cwbNavTab
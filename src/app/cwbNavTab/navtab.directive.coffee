cwbNavTab = () ->
  
  link = (scope, element, attrs)->
    scope.toLink = (s) ->
      return s.toLowerCase().replace(' ', '_')

  scope = 
    tabs: '='

  directive = 
    link: link
    scope: scope
    restrict: 'E',
    templateUrl: '/dist/app/cwbNavTab/navtab.directive.html',
    controller: 'NavController as vm'

  return directive

angular
  .module('cwbApp')
  .directive('cwbNavTab', cwbNavTab)
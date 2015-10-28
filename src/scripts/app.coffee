URL = window.location.href
TEMPLATES = 'dist/templates/'

cwbApp = angular.module 'cwbApp', []

cwbApp.directive 'mainHeader', () ->
  return {
    restrict: 'E',
    scope: {
      role: '@'
    },
    templateUrl: '../templates/views/main-header.html'
  }

cwbApp.controller 'mainCtrl', ($scope, $http) ->
  return
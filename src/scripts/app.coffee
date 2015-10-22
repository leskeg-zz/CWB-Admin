URL = window.location.href
TEMPLATES = 'dist/templates/'

cwbApp = angular.module 'cwbApp', []

cwbApp.controller 'mainCtrl', ($scope, $http) ->
	return
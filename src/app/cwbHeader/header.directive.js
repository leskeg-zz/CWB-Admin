angular.module('cwbApp').directive('cwbHeader', function () {
    return {
        restrict: 'E',
        templateUrl: '/dist/app/cwbHeader/header.directive.html',
        scope: {
            role: '@'
        }
    };
});
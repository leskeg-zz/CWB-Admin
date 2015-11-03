angular.module('cwbApp').directive('cwbNavTab', function () {
    return {
        link: function (scope, element, attrs) {
            return scope.toLink = function (s) {
                return s.toLowerCase().replace(' ', '_');
            };
        },
        scope: {
            tabs: '='
        },
        restrict: 'E',
        templateUrl: '/dist/app/cwbNavTab/navtab.directive.html',
        controller: 'NavController as vm'
    };
});
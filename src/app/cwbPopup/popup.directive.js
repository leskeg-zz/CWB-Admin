angular.module('cwbApp').directive('cwbPopup', function () {
    return {
        restrict: 'E',
        templateUrl: '/dist/app/cwbPopup/popup.directive.html',
        transclude: true,
    };
});
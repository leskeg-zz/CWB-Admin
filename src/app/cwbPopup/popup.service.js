angular.module('cwbApp').service('PopupService', function ($modal) {

    var vm = this;

    vm.openPopup = function (template) {
        $modal.open({
            templateUrl: template,
            controller: 'PopupController as vm'
        });
    };
});
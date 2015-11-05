angular.module('cwbApp').service('PopupService', function ($modal) {
    var vm = this;

    vm.openPoup = function (template) {
        $modal.open({
            templateUrl: template,
            controller: 'PopupController as vm'
        });
    };
});
angular.module('cwbApp').controller('PopupController', function ($modalInstance) {

    var vm = this;

    vm.save = save;
    vm.close = close;

    function save() {
        $modalInstance.close();
    }

    function close() {
        $modalInstance.dismiss();
    }
});
angular.module('cwbApp').controller('PopupActionController', function ($modalInstance) {
    var vm = this;
    vm.save = function () {
        $modalInstance.close();
    };

    vm.close = function () {
        $modalInstance.dismiss();
    };

});
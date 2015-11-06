angular.module('cwbApp').controller('PopupController', function ($modalInstance) {

    //TODO create footer buttons list inside controllers
    var vm = this;

    vm.save = function () {
      $modalInstance.close();
    };

    vm.close = function () {
      $modalInstance.dismiss();
    };
});
angular.module('cwbApp').controller('UserController', ['CwbPopupService', function (CwbPopupService) {

    this.popup = CwbPopupService;

    this.deleteUser = function () {
        alert('delete user');
    };
}]);
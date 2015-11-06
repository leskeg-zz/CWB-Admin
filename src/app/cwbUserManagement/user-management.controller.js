angular.module('cwbApp').controller('UserManagementController', function (PopupService) {

    var vm = this;

    vm.deleteUser = function () {
        alert('delete user');
    };

    vm.openUserPopup = function(){
        PopupService.openPoup('/dist/app/cwbUserManagement/edit_user_popup.html');
    };

    vm.openActionsPopup = function () {
        PopupService.openPoup('/dist/app/cwbUserManagement/manage_actions_popup.html');
    };
});
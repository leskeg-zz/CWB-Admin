angular.module('cwbApp').controller('UserController', function (PopupService) {

    //TODO create footer buttons list inside controllers
    var vm = this;

    vm.deleteUser = function () {
        alert('delete user');
    };

    vm.openUserPopup = function(){
        PopupService.openPoup('/dist/assets/templates/edit_user_popup.html');
    }

    vm.openActionsPopup = function () {
        PopupService.openPoup('/dist/assets/templates/manage_actions_popup.html');
    };
});
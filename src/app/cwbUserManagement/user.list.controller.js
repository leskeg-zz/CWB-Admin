angular.module('cwbApp').controller('UserListController', ['PopupService', function (PopupService) {

    var vm = this;

    vm.add = add;
    vm.edit = edit;
    vm.remove = remove;
    vm.block = block;
    vm.enable = enable;
    vm.blockPassword = blockPassword;
    vm.assignRole = assignRole;

    function add() {
        PopupService.openPopup('/dist/app/cwbUserManagement/edit_user_popup.html');
    }

    function edit() {
        PopupService.openPopup('/dist/app/cwbUserManagement/edit_user_popup.html');
    }

    function remove() {
        alert('remove user');
    }

    function block() {
        alert('block user');
    }

    function enable() {
        alert('enable user');
    }

    function blockPassword() {
        alert('block user password');
    }

    function assignRole() {
        alert('assign role');
    }
}]);
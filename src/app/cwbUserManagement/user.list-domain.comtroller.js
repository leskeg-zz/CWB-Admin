angular.module('cwbApp').controller('UserListDomainController', ['PopupService', function (PopupService) {

    var vm = this;

    vm.add = add;
    vm.edit = edit;
    vm.remove = remove;
    vm.block = block;
    vm.enable = enable;
    vm.assignRole = assignRole;

    function add() {
        PopupService.openPopup('/dist/app/cwbUserManagement/edit_user_popup.html');
    }

    function edit() {
        PopupService.openPopup('/dist/app/cwbUserManagement/edit_user_popup.html');
    }

    function remove() {
        alert('remove domain ser');
    }

    function block() {
        alert('block domain user');
    }

    function enable() {
        alert('enable domain user');
    }

    function assignRole() {
        alert('assign domain role');
    }

}]);
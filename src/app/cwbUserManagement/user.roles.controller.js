angular.module('cwbApp').controller('UserRolesController', function (PopupService) {

    var vm = this;

    vm.add = add;
    vm.edit = edit;
    vm.remove = remove;
    vm.manageActions = manageActions;
    vm.save = save;
    vm.reset = reset;

    function add() {
        alert('add role');
    }

    function edit() {
        alert('edit role');
    }

    function remove() {
        alert('remove role');
    }

    function manageActions() {
        PopupService.openPopup('/dist/app/cwbUserManagement/manage_actions_popup.html');
    }

    function save() {
        alert('save role');
    }

    function reset() {
        alert('reset role');
    }
});
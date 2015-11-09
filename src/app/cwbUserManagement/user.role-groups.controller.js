angular.module('cwbApp').controller('UserRoleGroupsController', function () {

    var vm = this;

    vm.add = add;
    vm.edit = edit;
    vm.remove = remove;
    vm.save = save;
    vm.reset = reset;

    function add() {
        alert('add group');
    }

    function edit() {
        alert('edit group');
    }

    function remove() {
        alert('remove group');
    }

    function save() {
        alert('save group');
    }

    function reset() {
        alert('reset group');
    }
});
angular.module('cwbApp').controller('BuListController', function () {

    var vm = this;

    vm.add = add;
    vm.edit = edit;
    vm.disable = disable;

    function add() {
        alert('add bu');
    }

    function edit() {
        alert('edit bu');
    }

    function disable() {
        alert('disable bu');
    }
});
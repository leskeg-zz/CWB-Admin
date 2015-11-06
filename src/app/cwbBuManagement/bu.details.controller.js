angular.module('cwbApp').controller('BuDetailsController', function () {

    var vm = this;

    vm.save = save;
    vm.cancel = cancel;

    function save() {
        alert('save details');
    }

    function cancel() {
        alert('cancel details');
    }

});
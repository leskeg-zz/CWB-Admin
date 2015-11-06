angular.module('cwbApp').controller('BuModulesController', function () {

    var vm = this;

    vm.add = add;
    vm.edit = edit;
    vm.disable = disable;

    vm.test = test;
    vm.validate = validate;
    vm.remove = remove;
    vm.activate = activate;
    vm.downloadConfig = downloadConfig;
    vm.uploadConfig = uploadConfig;


    function add() {
        alert('add module');
    }

    function edit() {
        alert('edit module');
    }

    function disable() {
        alert('disable module');
    }

    function test() {
        alert('test');
    }

    function validate() {
        alert('validate');
    }

    function remove() {
        alert('remove');
    }

    function activate() {
        alert('activate');
    }

    function downloadConfig() {
        alert('download');
    }

    function uploadConfig() {
        alert('upload');
    }

});
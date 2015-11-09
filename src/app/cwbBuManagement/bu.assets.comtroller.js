angular.module('cwbApp').controller('BuAssetsController', function () {

    var vm = this;

    vm.uploadFile = uploadFile;

    function uploadFile() {
        alert('upload');
    }
});
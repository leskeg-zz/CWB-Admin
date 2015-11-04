angular.module('cwbApp').controller('UserController', function ($modal) {

    //TODO create footer buttons list inside controllers
    var vm = this;

    vm.deleteUser = function () {
        alert('delete user');
    };

    vm.openUserPopup = function () {
        $modal.open({
            templateUrl: '/dist/assets/templates/edit_user_popup.html',
            controller: 'PopupActionController as vm'
        });
    };

    vm.openActionsPopup = function () {
        $modal.open({
            templateUrl: '/dist/assets/templates/manage_actions_popup.html',
            controller: 'PopupActionController as vm'
        });
    };
});
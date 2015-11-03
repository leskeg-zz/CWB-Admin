angular.module('cwbApp').controller('UserController', function ($modal) {

    //TODO create footer buttons list inside controllers

    this.deleteUser = function () {
        alert('delete user');
    };

    this.openUserPopup = function () {
        $modal.open({
            templateUrl: '/dist/assets/templates/edit_user_popup.html',
            controller: function ($scope, $modalInstance) {

                $scope.save = function () {
                    $modalInstance.close();
                };

                $scope.close = function () {
                    $modalInstance.dismiss();
                };
            }
        });
    };

    this.openActionsPopup = function () {
        $modal.open({
            templateUrl: '/dist/assets/templates/manage_actions_popup.html',
            controller: function ($scope, $modalInstance) {

                $scope.save = function () {
                    $modalInstance.close();
                };

                $scope.close = function () {
                    $modalInstance.dismiss();
                };
            }
        });
    };
});
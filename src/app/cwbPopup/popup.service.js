angular.module('cwbApp').service('CwbPopupService', ['$modal', function ($modal) {
    return {

        openUserPopup: function () {
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
        },

        openActionsPopup: function () {
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
        }

    };
}]);
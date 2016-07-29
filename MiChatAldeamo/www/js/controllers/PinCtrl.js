app.controller('PinCtrl', function ($scope, $stateParams, $state) {

    $scope.toProfile = function () {
        $state.go("app.profile");
    };

    $scope.pin = "";

    $scope.margin = { "margin": "300px auto 0 auto" };

    window.addEventListener("orientationchange", function () {
        console.log(window.orientation);
        if (window.orientation == 90 || window.orientation == -90) {
            $scope.margin = { "margin": "140px auto 0 auto" };
            $scope.$apply();
        }
        if (window.orientation == 0) {
            $scope.margin = { "margin": "280px auto 0 auto" };
            $scope.$apply();
        }
    }, false);

});
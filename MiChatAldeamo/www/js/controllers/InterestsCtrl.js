app.controller('InterestsCtrl', function ($rootScope, $scope, $stateParams, $state) {

    $rootScope.menu = true;

    $scope.toHelp = function () {
        $state.go("app.help");
    };
});
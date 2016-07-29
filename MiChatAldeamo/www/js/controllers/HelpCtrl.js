app.controller('HelpCtrl', function ($rootScope, $scope, $state, $stateParams) {

    $rootScope.menu = true;


    $scope.toChat = function () {
        $state.go("app.chat");
    };
});
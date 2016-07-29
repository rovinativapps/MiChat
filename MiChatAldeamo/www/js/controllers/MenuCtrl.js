app.controller('MenuCtrl', function ($rootScope, $scope, $stateParams, $state) {

    $rootScope.menu = false;

    $scope.toProfile = function () {
        $state.go("app.profile");
    };

    $scope.toHelp = function () {
        $state.go("app.help");
    };

    $scope.toTerms = function () {
        $state.go("app.terms");
    };

    $scope.toFaq = function () {
        $state.go("app.faq");
    }

    $scope.toConfig = function ()
    {
        $state.go("app.config");
    }

});
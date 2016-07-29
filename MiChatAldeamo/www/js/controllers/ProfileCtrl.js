app.controller('ProfileCtrl', function ($rootScope, $scope, $stateParams, $state) {

    $rootScope.menu = false;

    $scope.toInterests = function ()
    {
        $state.go("app.interests");
    };

    $scope.toAvatar = function ()
    {
        $state.go("app.avatar");
    }



});
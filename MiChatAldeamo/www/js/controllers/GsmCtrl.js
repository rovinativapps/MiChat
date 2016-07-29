app.controller('GsmCtrl', function ($scope, $stateParams, $ionicPlatform, $state) {


    $scope.toPin = function () {
        $state.go("pin");
    };

    $scope.margin = { "margin": "280px auto 0 auto" };

    $scope.operator = '';
    $ionicPlatform.ready(function () {
        console.log('ionic.Platform.ready');
        window.plugins.sim.getSimInfo(
          function (r) {
              //  $scope.out = r;
              var operator = "(" + r.carrierName + " " + r.countryCode + ")";
              $scope.operator = operator.toUpperCase();

              $scope.$apply();
              console.log(r);
          },
          function (r) {
              //  $scope.out = r;
              $scope.$apply();
              console.log(r);
          }
        );

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

});
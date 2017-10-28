(function() {
    function HomeCtrl($scope, $timeout) {
      $scope.counter = 1500;
      $scope.buttonText = "start";

      $scope.onTimeout = function() {
          if ($scope.counter > 0)$scope.counter--;
          mytimeout = $timeout($scope.onTimeout,1000);
      }

      $scope.stop = function() {
          $timeout.cancel(mytimeout);
      }

      $scope.start = function() {
        if ($scope.buttonText == "start") {
          $scope.buttonText = "reset";
          var mytimeout = $timeout($scope.onTimeout,1000);
        } else if ($scope.buttonText == "reset") {
          $scope.buttonText = "start";
          $scope.counter = 1500;
          $scope.stop();
        }
      };
    }

    angular
        .module('blocTime')
        .controller('HomeCtrl', ['$scope', '$timeout', HomeCtrl]);
})();

(function() {
    function HomeCtrl($scope, $timeout) {
      $scope.counter = 1500; // 25 minutes
      $scope.buttonText = "start";
      $scope.onBreak = false;
      var completedWorkSession = 0;

      // countdowning the time
      $scope.onTimeout = function() {
          if ($scope.counter >= 0)$scope.counter--;
          mytimeout = $timeout($scope.onTimeout,1000);
          if ($scope.counter < 0 && $scope.onBreak == false && completedWorkSession % 4 != 0) { // switch it to 5 minute break session
            completedWorkSession++;
            $scope.stop();
            $scope.onBreak = true;
            $scope.counter = 300; // 5 minutes
            $scope.buttonText = "start";
          } else if ($scope.counter < 0 && $scope.onBreak == true) { // switch it to work session
            $scope.stop();
            $scope.onBreak = false;
            $scope.counter = 1500;
            $scope.buttonText = "start";
          } else if ($scope.counter < 0 && $scope.onBreak == false && completedWorkSession % 4 == 0) { // switch it to 30 minute break session
            completedWorkSession = 0;
            $scope.stop();
            $scope.onBreak = true;
            $scope.counter = 1800; // 30 minutes
            $scope.buttonText = "start";
          }
      }

      // stop the time
      $scope.stop = function() {
          $timeout.cancel(mytimeout);
      }

      // start a work session
      $scope.workSession = function() {
        if ($scope.buttonText == "start") {
          $scope.buttonText = "reset";
          var mytimeout = $timeout($scope.onTimeout,1000);
        } else if ($scope.buttonText == "reset") { // reset the time
          $scope.buttonText = "start";
          $scope.counter = 1500;
          $scope.stop();
        }
      }

      $scope.breakSession = function() {
        if ($scope.buttonText == "start") {
          $scope.buttonText = "reset";
          var mytimeout = $timeout($scope.onTimeout,1000);
        } else if ($scope.buttonText == "reset") { // reset the time
          $scope.buttonText = "start";
          $scope.counter = 300;
          $scope.stop();
        }
      }
    }

    angular
        .module('blocTime')
        .controller('HomeCtrl', ['$scope', '$timeout', HomeCtrl]);
})();

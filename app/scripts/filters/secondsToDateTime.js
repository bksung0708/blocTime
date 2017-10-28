(function() {
    function secondsToDateTime() {
      return function(seconds) {
          return new Date(1970, 0, 1).setSeconds(seconds);
      };
    }

    angular
        .module('blocTime')
        .filter('secondsToDateTime', secondsToDateTime);
})();

'use strict';

/**
 * @ngdoc service
 * @name timerApp.helperService
 * @description
 * # helperService
 * Service in the timerApp.
 */
angular.module('timerApp')
  .service('helperService', ['$q', '$http', '$rootScope', '$timeout', function ($q,$http,$rootScope,$timeout) {
    var someBoolean=true;
    // AngularJS will instantiate a singleton by calling "new" on this function
    var getServerTime = function() {
      // Use http to get data from server and then broadcast an event at root scope.
      $timeout(function(){
        $rootScope.$broadcast('serverTime', new Date());
      },500);
    };
    var getServerTimeUsingPromise = function () {
      var deferred= $q.defer();
      $timeout(function(){
        someBoolean=!someBoolean;
        if (someBoolean) {
          deferred.resolve(new Date());
        } else {
          deferred.reject('not able to get server time');
        }
      },500);

      return deferred.promise;
    }
    return {
      getServerTime : getServerTime,
      getServerTimeUsingPromise : getServerTimeUsingPromise
    }
  }]);

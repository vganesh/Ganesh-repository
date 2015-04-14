'use strict';

/**
 * @ngdoc function
 * @name timerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timerApp
 */
angular.module('timerApp')
  .controller('MainCtrl', function ($scope, $rootScope, helperService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $scope.buttonClicked = function (text) {
        console.log('Inside buttonClicked this.$id = ' + this.$id + ' this.$parent.$id = ' + this.$parent.$id + ' text = ' + text + ' this.thing = ' + this.thing);
      };
      $scope.rootscope=$rootScope;
      $scope.getServerTime = function () {
        console.log("Inside getServerTime() callback " );
        helperService.getServerTime();
      };
    $scope.$on('serverTime', function(event,serverTime){
      console.log("server event happened ");
      $scope.serverTime=serverTime;
    });
    //$scope.getServerYear = function() {
    //  if (serverTime) {
    //    return serverTime.getFullYear();
    //  }
    //}
    $scope.getServerTimeUsingPromise = function () {
      console.log("Inside getServerTimeUsingPromise() callback " );
      helperService.getServerTimeUsingPromise().then(function(stime){
      $scope.serverTime=stime;
      }).catch (function(error){
        $scope.serverTime=undefined;
        console.log("getServerTimeUsingPromise() failed " );
      });
    };
      console.log('Inside MainCtrl $rootScope.$id = ' + $rootScope.$id + ' $scope.$id = ' + $scope.$id + ' $scope.$parent.$id = ' + $scope.$parent.$id)
  });

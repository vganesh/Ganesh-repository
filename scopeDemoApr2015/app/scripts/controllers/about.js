'use strict';

/**
 * @ngdoc function
 * @name timerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the timerApp
 */
angular.module('timerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

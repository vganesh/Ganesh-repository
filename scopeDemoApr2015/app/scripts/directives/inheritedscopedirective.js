'use strict';

angular.module('timerApp')
  .directive('inheritedScopeDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the inheritedScopeDirective directive');
        console.log('Inside inheritedScopeDirective scope.%id = ' + scope.$id);

      }
    };
  });

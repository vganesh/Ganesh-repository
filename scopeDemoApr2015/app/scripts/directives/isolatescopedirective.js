'use strict';

angular.module('timerApp')
  .directive('isolateScopeDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
        thing: '@'
      },
      link: function postLink(scope, element, attrs) {
        element.text('this is the isolateScopeDirective directive. The thing is ' + attrs.thing );
        console.log('Inside isolateScopeDirective scope.%id = ' + scope.$id);
      }
    };
  });

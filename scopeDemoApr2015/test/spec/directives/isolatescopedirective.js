'use strict';

describe('Directive: isolateScopeDirective', function () {

  // load the directive's module
  beforeEach(module('timerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<isolate-scope-directive thing="something"></isolate-scope-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the isolateScopeDirective directive');
  }));
});

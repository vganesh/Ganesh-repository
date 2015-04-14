'use strict';

describe('Controller: AnothercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('timerApp'));

  var AnothercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnothercontrollerCtrl = $controller('AnothercontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.anotherAwesomeThings.length).toBe(3);
  });
});

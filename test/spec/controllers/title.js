'use strict';

describe('Controller: TitlectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('seo2App'));

  var TitlectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TitlectrlCtrl = $controller('TitlectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

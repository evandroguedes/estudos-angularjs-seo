'use strict';

describe('Service: MetaInformation', function () {

  // load the service's module
  beforeEach(module('seo2App'));

  // instantiate service
  var MetaInformation;
  beforeEach(inject(function (_MetaInformation_) {
    MetaInformation = _MetaInformation_;
  }));

  it('should do something', function () {
    expect(!!MetaInformation).toBe(true);
  });

});

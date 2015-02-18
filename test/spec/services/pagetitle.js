'use strict';

describe('Service: PageTitle', function () {

  // load the service's module
  beforeEach(module('seo2App'));

  // instantiate service
  var PageTitle;
  beforeEach(inject(function (_PageTitle_) {
    PageTitle = _PageTitle_;
  }));

  it('should do something', function () {
    expect(!!PageTitle).toBe(true);
  });

});

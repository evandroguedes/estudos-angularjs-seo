'use strict';

/**
 * @ngdoc service
 * @name seo2App.PageTitle
 * @description
 * # PageTitle
 * Service in the seo2App.
 */
angular.module('seo2App')
  .service('PageTitle', function() {
      var title = 'Teste de SEO com AngularJS';
      return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
      };
    });
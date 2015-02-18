'use strict';

/**
 * @ngdoc service
 * @name seo2App.MetaInformation
 * @description
 * # MetaInformation
 * Service in the seo2App.
 
 fonte: https://weluse.de/blog/angularjs-seo-finally-a-piece-of-cake.html
 
 */
angular.module('seo2App')
  .service('MetaInformation', function() {
      var metaDescription = 'Descrição padrão de teste SEO com angularJS';
      var metaKeywords = 'teste,seo,angularJS';
      return {
        metaDescription: function() { return metaDescription; },
        metaKeywords: function() { return metaKeywords; },
        reset: function() {
          metaDescription = '';
          metaKeywords = '';
        },
        setMetaDescription: function(newMetaDescription) {
          metaDescription = newMetaDescription;
        },
        appendMetaKeywords: function(newKeywords) {
          for (var key in newKeywords) {
            if (metaKeywords === '') {
              metaKeywords += newKeywords[key].name;
            } else {
              metaKeywords += ', ' + newKeywords[key].name;
            }
          }
        }
      };
    });
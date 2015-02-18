'use strict';

/**
 * @ngdoc function
 * @name seo2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the seo2App
 */
angular.module('seo2App')
  .controller('AboutCtrl', function ($scope, MetaInformation, PageTitle) {
		// Setando o título dessa página dinamicamente para um teste simples
		PageTitle.setTitle('Título da página about.');
		// Setando a meta descrição dessa página dinamicamente
    MetaInformation.setMetaDescription('Meta descrição da página about.');
  });

'use strict';

/**
 * @ngdoc function
 * @name seo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seo2App
 
 Fonte: https://weluse.de/blog/angularjs-seo-finally-a-piece-of-cake.html
 
 */
angular.module('seo2App')
  .controller('MainCtrl', function ($scope) {
	  // dados fictícios exibidos na view principal com o ngRepeat para checar se o Google está renderizando corretamente a página
    $scope.items = [{nome: 'Teste 1'}, {nome: 'Teste 2'}];
  });
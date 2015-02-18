'use strict';

/**
 * @ngdoc function
 * @name seo2App.controller:TitlectrlCtrl
 * @description
 * # TitlectrlCtrl
 * Controller of the seo2App
 */
angular.module('seo2App')
  .controller('titleCtrl', ['PageTitle', 'MetaInformation', function ($scope, PageTitle, MetaInformation) {
	  // Usado para setar <title>, <meta name="description"> e <meta name="keywords"> na view index.html
    $scope.PageTitle = PageTitle;
    $scope.MetaInformation = MetaInformation;
  }]);

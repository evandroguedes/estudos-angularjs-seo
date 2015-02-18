'use strict';
/**
 * @ngdoc overview
 * @name seo2App
 * @description
 * # seo2App
 *
 * Main module of the application.
 */
angular
  .module('seo2App', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    // remove # das urls, com fallback para browsers antigos (https://docs.angularjs.org/api/ng/provider/$locationProvider)
    // Importante, você também precisa configurar o seu .htaccess
    
    /* Exemplo no Apache:
	    
			<VirtualHost *:80>
			    ServerName my-app
			
			    DocumentRoot /path/to/app
			
			    <Directory /path/to/app>
			        RewriteEngine on
			
			        # Don't rewrite files or directories
			        RewriteCond %{REQUEST_FILENAME} -f [OR]
			        RewriteCond %{REQUEST_FILENAME} -d
			        RewriteRule ^ - [L]
			
			        # Rewrite everything else to index.html to allow html5 state links
			        RewriteRule ^ index.html [L]
			    </Directory>
			</VirtualHost>
			
			Fonte: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
			
		*/
    
    $locationProvider.html5Mode(true);
  });

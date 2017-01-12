(function () {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 *
	 * Declares the modules of the github explorer app
	 *
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 * Main modules of the application.
	 */

	angular.module('poll', [
		'ngResource',
		'ngAria',
		'ui.bootstrap',
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
		'room',
		'roomCreate',
		'login',
		'register',
		'profile',
		'sidebar',
		'header',
		'help'
	]);

})();

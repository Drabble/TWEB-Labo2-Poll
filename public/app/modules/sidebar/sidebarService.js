(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:sidebarService
	 * @description
	 * # sidebarService
	 * Service of the Pollspeak sidebar
     * @author Antoine Drabble
     * @author Guillaume Serneels
	 */

	angular
		.module('sidebar')
		.factory('SidebarService', Sidebar);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Sidebar.$inject = ['$http'];

	function Sidebar($http) {

	}

})();

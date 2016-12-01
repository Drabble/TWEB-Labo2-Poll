(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:gefeature1Service
	 * @description
	 * # gefeature1Service
	 * Service of the github explorer app feature 1
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

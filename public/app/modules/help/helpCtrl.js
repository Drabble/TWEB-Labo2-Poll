(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:gefeature1Ctrl
	* @description
	* # gefeature1Ctrl
	* Controller of the github explorer app feature 1,  displays a
	* list of the most starred repos on github
	* @author Antoine Drabble
	* @author Guillaume Serneels
	*
	*/

	angular
		.module('help')
		.controller('HelpCtrl', Help);

	Help.$inject = ['$scope', '$http'];

	/*
	* @summary instantiates the Gefeature1 module
	* Fetches the list of the most starred repos from the database using
	* the REST API url /most_starred_repos
	*/
	function Help($scope, $http) {

	}

})();

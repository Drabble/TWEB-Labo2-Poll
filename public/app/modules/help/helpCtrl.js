(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:helpCtrl
	* @description
	* # helpCtrl
	* Controller Help Module 
	* @author Antoine Drabble
	* @author Guillaume Serneels
	*
	*/

	angular
		.module('help')
		.controller('HelpCtrl', Help);

	Help.$inject = ['$scope', '$http'];

	/*
	* @summary 
	*/
	function Help($scope, $http) {

	}

})();

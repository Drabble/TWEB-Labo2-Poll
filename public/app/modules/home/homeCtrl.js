(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:homeCtrl
	* @description
	* # homeCtrl
	* Controller of the Home Module 	
	* @author Antoine Drabble
	* @author Guillaume Serneels
	*
	*/

	angular
		.module('home')
		.controller('HomeCtrl', Home);

	Home.$inject = ['$scope', '$http'];

	/*
	* @summary 
	*/
	function Home($scope, $http) {
		
	}

})();

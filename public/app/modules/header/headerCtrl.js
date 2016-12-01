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
		.module('header')
		.controller('HeaderCtrl', Header);

	Header.$inject = ['$scope', '$http', '$cookies', '$state'];

	/*
	* @summary instantiates the Gefeature1 module
	* Fetches the list of the most starred repos from the database using 
	* the REST API url /most_starred_repos
	*/
	function Header($scope, $http, $cookies, $state) {
		$scope.logged = $cookies.get("token");
		$scope.$watch(function() { return $cookies.get("token"); }, function(newValue) {
			$scope.logged = $cookies.get("token");
		});
		$scope.signout = function() {
			$cookies.remove('token');
			$state.go('home'); 
		};
	}

})();

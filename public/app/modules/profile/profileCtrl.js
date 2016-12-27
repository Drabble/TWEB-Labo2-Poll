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
		.module('profile')
		.controller('ProfileCtrl', Profile);

	Profile.$inject = ['$scope', '$http', '$cookies', '$state'];

	/*
	* @summary instantiates the Gefeature1 module
	* Fetches the list of the most starred repos from the database using
	* the REST API url /most_starred_repos
	*/
	function Profile($scope, $http, $cookies, $state) {
		if(!$cookies.get("token")){
			$state.go('login');
		}
		$http({
			method: 'GET',
			url: '/api/account',
			headers: { 'Content-Type': 'application/json',
					   'Authorization': $cookies.get("token")
					 }
		}).then(
			function(res) {
				$scope.username = res.data.username;
				$scope.firstname = res.data.firstname;
				$scope.lastname = res.data.lastname;
				$scope.createdAt = res.data.createdAt;
				$scope.email = res.data.email;
			},
			function(err) {
				console.log('retrieve profile...', err);
				$scope.error = err.data.msg;
			}
		);
	}
})();

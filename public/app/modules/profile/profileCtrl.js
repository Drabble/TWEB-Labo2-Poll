(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:profileCtrl
	 * @description
	 * # profileCtrl
	 * Controller of the Profile Module
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 *
	 */

	angular
		.module('profile')
		.controller('ProfileCtrl', Profile);

	Profile.$inject = ['$scope', '$http', '$cookies', '$state'];

	/*
	 * @summary profile viewing feature for the Pollspeak app
	 */
	function Profile($scope, $http, $cookies, $state) {
		// If user is not logged in, go to login page
		if(!$cookies.get("token")){
			$state.go('login');
		}

		// Get the account informations
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

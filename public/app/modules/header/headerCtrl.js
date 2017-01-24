(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:headerCtrl
	* @description
	* # headerCtrl
	* Controller of the Header Module
	* @author Antoine Drabble
	* @author Guillaume Serneels
	*
	*/

	angular
		.module('header')
		.controller('HeaderCtrl', Header);

	Header.$inject = ['$scope', '$http', '$cookies', '$state'];

	/*
	* @summary instantiates the Header and get account informations
	*/
	function Header($scope, $http, $cookies, $state) {
		// If the user is logged in get the account information to display its firstname and lastname
		$scope.logged = $cookies.get("token");
		if($scope.logged){
			$http({
				method: 'GET',
				url: '/api/account',
				headers: { 'Content-Type': 'application/json',
					'Authorization': $cookies.get("token")
				}
			}).then(
				function(res) {
					$scope.firstname = res.data.firstname;
					$scope.lastname = res.data.lastname;
					$scope.createdAt = res.data.createdAt;
				},
				function(err) {
					console.log('retrieve profile...', err);
					$scope.error = err.data.msg;
				}
			);
		}
		// Watch for login and get account informations to display its firstname and lastname
		$scope.$watch(function() { return $cookies.get("token"); }, function(newValue) {
			// TODO Duplication of code, make a service!
			$scope.logged = $cookies.get("token");
			if($scope.logged){
				$http({
					method: 'GET',
					url: '/api/account',
					headers: { 'Content-Type': 'application/json',
						'Authorization': $cookies.get("token")
					}
				}).then(
					function(res) {
						$scope.firstname = res.data.firstname;
						$scope.lastname = res.data.lastname;
						$scope.createdAt = res.data.createdAt;
					},
					function(err) {
						console.log('retrieve profile...', err);
						$scope.error = err.data.msg;
					}
				);
			}
		});

		// Handle the signout button
		$scope.signout = function() {
			$cookies.remove('token');
			$state.go('home');
		};
	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:loginCtrl
	* @description
	* # loginCtrl
	* Controller of the Login Module
	* @author Antoine Drabble
	* @author Guillaume Serneels
	*
	*/

	angular
		.module('login')
		.controller('LoginCtrl', Login);

	Login.$inject = ['$scope', '$http', '$cookies', '$state'];

	/*
	* @summary login feature for the Pollspeak app
	*/
	function Login($scope, $http, $cookies, $state) {
		// If the user is logged in, go to the profile page
		if($cookies.get("token")){
			$state.go('profile'); 
		}

		// Handle login form submission
		$scope.submit = function() {
			if ($scope.username && $scope.password) {
				$http({
					method: 'POST',
					url: '/api/authenticate', 
					data: { name: $scope.username, password: $scope.password },
					headers: { 'Content-Type': 'application/json' }
				}).then(
					function(res) {
						console.log('login success !', res.data);
							$cookies.put("token", res.data.token);
							$state.go('profile'); 
					},
					function(err) {
						console.log('login error...', err);
						$scope.error = err.data.msg;
					}
				);
			} else{
				$scope.error = "Empty username or password";
			}
		};
	}

})();

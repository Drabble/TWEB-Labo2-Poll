(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:registerCtrl
	* @description
	* # registerCtrl
	* Controller of the Register Module
	* @author Antoine Drabble
	* @author Guillaume Serneels
	*
	*/

	angular
		.module('register')
		.controller('RegisterCtrl', Register);

	Register.$inject = ['$scope', '$http', '$cookies', '$state'];

	/*
	* @summary registration feature for the PollSpeak app
	*/
	function Register($scope, $http, $cookies, $state) {
		// Go to the profile page if logged in
		if($cookies.get("token")){
			$state.go('profile'); 
		}

		// Handle register form submission
		$scope.submit = function() {
			if ($scope.username && $scope.password) {
				$http({
					method: 'POST',
					url: '/api/signup', 
					data: {
						name: $scope.username,
						password: $scope.password,
						email: $scope.email,
						lastname: $scope.lastname,
						firstname: $scope.firstname
					},
					headers: { 'Content-Type': 'application/json' }
				}).then(
					function(res) {
						console.log('register success !', res.data);
						$scope.success = "Register successful";
						$scope.error = null;
					},
					function(err) {
						console.log('register error...', err);
						$scope.error = err.data.msg;
						$scope.success = null;
					}
				);
			} else{
				console.log("Empty username or password");
				$scope.error = "Empty username or password";
				$scope.success = null;
			}
		};
	}

})();

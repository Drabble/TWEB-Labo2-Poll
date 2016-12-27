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
		.module('register')
		.controller('RegisterCtrl', Register);

	Register.$inject = ['$scope', '$http', '$cookies', '$state'];

	/*
	* @summary instantiates the Gefeature1 module
	* Fetches the list of the most starred repos from the database using 
	* the REST API url /most_starred_repos
	*/
	function Register($scope, $http, $cookies, $state) {
		if($cookies.get("token")){
			$state.go('profile'); 
		}
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

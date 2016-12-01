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
		.module('sidebar')
		.controller('SidebarCtrl', Sidebar);

	Sidebar.$inject = ['$scope', '$http', '$cookies', '$state'];

	/*
	* @summary instantiates the Gefeature1 module
	* Fetches the list of the most starred repos from the database using 
	* the REST API url /most_starred_repos
	*/
	function Sidebar($scope, $http, $cookies, $state) {
		/*if($cookies.get("token")){
			$state.go('profile'); 
		}
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
						if(res.data.success){
							$cookies.put("token", res.data.token);
							$state.go('profile'); 
						} else{
							$scope.error = res.data.msg;
						}
					},
					function(err) {
						console.log('login error...', err);
						$scope.error = err;
					}
				);
			} else{
				$scope.error = "Empty username or password";
			}
		};*/
	}

})();

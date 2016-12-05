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
		$scope.rooms = [];
		$scope.$watch('logged', function() {
			// Room list
			if($scope.logged){
				$http({
					method: 'GET',
					url: '/api/rooms', 
					headers: { 'Content-Type': 'application/json',
							'Authorization': $scope.logged 
					}
				}).then(
					function(res) {
						console.log('rooms success !', res.data);
						if(res.data.success){
							$scope.rooms = res.data.rooms;
						} else{
							$scope.error = res.data.msg;
						}
					},
					function(err) {
						console.log('rooms error...', err);
					}
				);
			} else{
				$scope.rooms = [];
			}
		});

		$scope.$on('newRoom', function (event, value) {
			$scope.rooms.push(value);
		});

		// Watch for logout/login
		$scope.logged = $cookies.get("token");
		$scope.$watch(function() { return $cookies.get("token"); }, function(newValue) {
			$scope.logged = $cookies.get("token");
		});

		$scope.joinRoom = function() {
			$state.go("room", {id: $scope.roomId});
		};
	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:sidebarCtrl
	* @description
	* # sidebarCtrl
	* Controller of the sidebar of the Pollspeak app
	* @author Antoine Drabble
	* @author Guillaume Serneels
	*
	*/

	angular
		.module('sidebar')
		.controller('SidebarCtrl', Sidebar);

	Sidebar.$inject = ['$scope', '$http', '$cookies', '$state', '$rootScope'];

	/*
	* @summary instantiates the Sidebar and get current rooms
	*/
	function Sidebar($scope, $http, $cookies, $state, $rootScope) {
		// The list of rooms
		$scope.rooms = [];

		// When user is logged in get the list of rooms
		$scope.$watch('logged', function() {
			if($scope.logged){
				$http({
					method: 'GET',
					url: '/api/rooms',
					headers: { 'Content-Type': 'application/json',
							'Authorization': $scope.logged
					}
				}).then(
					function(res) {
						$rootScope.rooms = res.data.rooms;
						$scope.rooms = res.data.rooms;
					},
					function(err) {
						console.log('rooms error...', err);
					}
				);
			} else{
				$scope.rooms = [];
			}
		});

		// When a new room is created add it to the list of rooms
		$scope.$on('newRoom', function (event, value) {
			$scope.rooms.push(value);
		});

		// Watch for logout/login
		$scope.logged = $cookies.get("token");
		$scope.$watch(function() { return $cookies.get("token"); }, function(newValue) {
			$scope.logged = $cookies.get("token");
		});

		// Handle join room button
		$scope.joinRoom = function() {
			$state.go("room", {id: $scope.roomId});
		};
	}

})();

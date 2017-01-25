(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:roomCreateCtrl
	 * @description
	 * # roomCreateCtrl
	 * Controller of the roomCreate Module
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 *
	 */

	angular
		.module('roomCreate')
		.controller('RoomCreateCtrl', RoomCreate);

	RoomCreate.$inject = ['$scope', '$http', '$state', '$cookies', '$rootScope'];

	/*
	 * @summary room creation feature for the Pollspeak app
	 */
	function RoomCreate($scope, $http, $state, $cookies, $rootScope) {
		// Get the token from cookies
		$scope.token = $cookies.get("token");

		// Handle room creation button
		$scope.submit = function() {
			if ($scope.name) {
				$http({
					method: 'POST',
					url: '/api/rooms',
					data: { name: $scope.name },
					headers: { 'Content-Type': 'application/json',
						'Authorization': $scope.token
					}
				}).then(
					function(res) {
						console.log('room success !', res.data);
						$rootScope.$broadcast('newRoom', res.data.room);
						$state.go("room", {"id": res.data.room._id});
					},
					function(err) {
						console.log('room create error...', err);
						$scope.error = err.data.msg;
					}
				);
			} else{
				console.log("Empty name");
				$scope.error = "Empty name";
			}
		};
	}

})();

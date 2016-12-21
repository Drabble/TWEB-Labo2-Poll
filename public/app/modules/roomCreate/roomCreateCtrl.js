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
		.module('roomCreate')
		.controller('RoomCreateCtrl', RoomCreate);

	RoomCreate.$inject = ['$scope', '$http', '$state', '$cookies', '$rootScope'];

	/*
	* @summary instantiates the Gefeature1 module
	* Fetches the list of the most starred repos from the database using 
	* the REST API url /most_starred_repos
	*/
	function RoomCreate($scope, $http, $state, $cookies, $rootScope) {
		$scope.token = $cookies.get("token");
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
						$state.go("room", {"id": res.data.room});
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

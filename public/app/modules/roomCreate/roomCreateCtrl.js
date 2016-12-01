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

	RoomCreate.$inject = ['$scope', '$http', '$cookies', '$state'];

	/*
	* @summary instantiates the Gefeature1 module
	* Fetches the list of the most starred repos from the database using 
	* the REST API url /most_starred_repos
	*/
	function RoomCreate($scope, $http, $state, $cookies) {
		$scope.submit = function() {
			if ($scope.name) {
				$http({
					method: 'POST',
					url: '/api/rooms', 
					data: { name: $scope.name, temporary: $scope.temporary },
					headers: { 'Content-Type': 'application/json',
						       'Authorization': $cookies.get("token")  
					}
				}).then(
					function(res) {
						console.log('room success !', res.data);
						if(res.data.success){
							$rootScope.$broadcast('newRoom', 'res.data.room');
							$state.go("room");
						} else{
							$scope.error = res.data.msg;
						}
					},
					function(err) {
						console.log('room create error...', err);
						$scope.error = "Internal server error";
					}
				);
			} else{
				console.log("Empty name");
				$scope.error = "Empty name";
			}
		};
	}

})();

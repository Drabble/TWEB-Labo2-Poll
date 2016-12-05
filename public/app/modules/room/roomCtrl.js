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
		.module('room')
		.controller('RoomCtrl', Room);

	Room.$inject = ['$scope', '$http', '$stateParams', 'socketio'];

	/*
	* @summary instantiates the Gefeature1 module
	* Fetches the list of the most starred repos from the database using 
	* the REST API url /most_starred_repos
	*/
	function Room($scope, $http, $stateParams, socketio) {
		$scope.id = $stateParams.id;
		socketio.join($scope.id);
		socketio.on("addQuestion", function(msg){
			console.log("new question");
		});
		socketio.on("listQuestions", function(msg){
			console.log("new room");
		});
		socketio.on("addComment", function(msg){
			console.log("new room");
		});
		socketio.on("addPlus", function(msg){
			console.log("new room");
		});
		socketio.on("addMinus", function(msg){
			console.log("new room");
		});
		$scope.questionSubmit = function(){
			console.log("create question");
			socketio.emitTo($scope.id, "addQuestion", {});
		}
		$scope.commentSubmit = function(){
			console.log("create comment");
			socketio.emitTo($scope.id, "addComment", {});
		}
		$scope.plusClick = function(){
			console.log("plus");
			socketio.emitTo($scope.id, "addPlus", {});
		}
		$scope.minusClick = function(){
			console.log("minus");
			socketio.emitTo($scope.id, "addMinus", {});
		}
	}

})();

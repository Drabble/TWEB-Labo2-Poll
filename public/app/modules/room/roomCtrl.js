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

	Room.$inject = ['$scope', '$http', '$stateParams', 'socketio', '$cookies'];

	/*
	* @summary instantiates the Gefeature1 module
	* Fetches the list of the most starred repos from the database using
	* the REST API url /most_starred_repos
	*/
	function Room($scope, $http, $stateParams, socketio, $cookies) {
		$scope.id = $stateParams.id;
		$scope.questions = [];
		$scope.comments = {};
		socketio.emit("joinRoom", {room: $scope.id});
		socketio.on("listQuestions", function(questions){
			console.log("new listQuestions");
			console.log(questions);
			for(var question in questions){
				questions[question].like = $cookies.get("like_" + questions[question]._id);
			}
			$scope.questions = questions;
		});
		socketio.on("addQuestion", function(question){
			console.log("new addQuestion");
			console.log(question);
			$scope.questions.push(question);
		});
		socketio.on("addComment", function(comment){
			console.log("new addComment");
			console.log(comment);
			for(var i in $scope.questions){
				if($scope.questions[i]._id === comment.question){
					$scope.questions[i].comments.push(comment);
					break;
				}
			}
		});
		socketio.on("addPlus", function(question){
			console.log("new addPlus");
			console.log(question);
			for(var i in $scope.questions){
				if($scope.questions[i]._id === question._id){
					$scope.questions[i].plus = question.plus;
					break;
				}
			}
		});
		socketio.on("addMinus", function(question){
			console.log("new addMinus");
			console.log(question);
			for(var i in $scope.questions){
				if($scope.questions[i]._id === question._id){
					$scope.questions[i].minus = question.minus;
					break;
				}
			}
		});
		$scope.questionSubmit = function(){
			console.log("create question");
			socketio.emit("addQuestion", {room: $scope.id, title: $scope.title, question: $scope.question});
			$scope.title = "";
			$scope.question = "";
		};
		$scope.commentSubmit = function(questionId){
			console.log("create comment");
			console.log($scope.comments[questionId]);
			socketio.emit("addComment", {room: $scope._id, question: questionId, comment: $scope.comments[questionId]});
		};
		$scope.plusClick = function(questionId){
			console.log(questionId);
			console.log("plus");
			if(!$cookies.get("like_" + questionId)) {
				socketio.emit("addPlus", {room: $scope.id, question: questionId});
			} else if($cookies.get("like_" + questionId) === "minus"){
				socketio.emit("addPlus", {room: $scope.id, question: questionId});
				socketio.emit("addPlus", {room: $scope.id, question: questionId});
			}
			$cookies.put("like_" + questionId, "plus");
			for(var question in $scope.questions){
				$scope.questions[question].like = $cookies.get("like_" + $scope.questions[question]._id);
			}
		};
		$scope.minusClick = function(questionId){
			console.log("minus");
			if(!$cookies.get("like_" + questionId)) {
				socketio.emit("addMinus", {room: $scope.id, question: questionId});
			} else if($cookies.get("like_" + questionId) === "plus"){
				socketio.emit("addMinus", {room: $scope.id, question: questionId});
				socketio.emit("addMinus", {room: $scope.id, question: questionId});
			}
			$cookies.put("like_" + questionId, "minus");
			for(var question in $scope.questions){
				$scope.questions[question].like = $cookies.get("like_" + $scope.questions[question]._id);
			}
		};
	}

})();

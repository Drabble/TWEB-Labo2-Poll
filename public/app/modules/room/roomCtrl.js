(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:roomCtrl
	* @description
	* # roomCtrl
	* Controller of the room Module
	* @author Antoine Drabble
	* @author Guillaume Serneels
	*
	*/

	angular
		.module('room')
		.controller('RoomCtrl', Room);

	Room.$inject = ['$scope', '$stateParams', 'socketio', '$cookies', '$rootScope'];

	/*
	* @summary room interactions implemented with the Socket.IO real-time bidirectional
	event-based communication library
	*/
	function Room($scope, $stateParams, socketio, $cookies, $rootScope) {
		$scope.id = $stateParams.id;
		$scope.questions = [];
		$scope.comments = {};
		$scope.success = false;
		$scope.colors = [ '#2ECC40', '#FF4136'];
		$scope.labels = ["Like", "Dislike"];
		$scope.showMore = function(question){
			question.quantity += 5;
		};
		$scope.userIsAdmin = function(){
			for(var room in $rootScope.rooms){
				if($rootScope.rooms[room]._id === $scope.id){
					return true;
				}
			}
			return false;
		};
		$scope.removeQuestion = function(){
			console.log($rootScope.rooms.indexOf($scope.id));
			return $rootScope.rooms && $rootScope.rooms.indexOf($scope.id) >= 0;
		};
		socketio.init();
		socketio.emit("joinRoom", {room: $scope.id});
		socketio.on("success", function(room){
			$scope.success = true;
			$scope.room = room;
		});
		socketio.on("fail", function(){
			$scope.success = false;
		});
		socketio.on("listQuestions", function(questions){
			console.log("new listQuestions");
			console.log(questions);
			for(var question in questions){
				questions[question].quantity = 5;
				questions[question].like = $cookies.get("like_" + questions[question]._id);
			}
			$scope.questions = questions;
		});
		socketio.on("addQuestion", function(question){
			console.log("new addQuestion");
			console.log(question);
			question.quantity = 5;
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
		socketio.on("removePlus", function(question){
			console.log("new removePlus");
			console.log(question);
			for(var i in $scope.questions){
				if($scope.questions[i]._id === question._id){
					$scope.questions[i].plus = question.plus;
					break;
				}
			}
		});
		socketio.on("removeMinus", function(question){
			console.log("new removeMinus");
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
			socketio.emit("addComment", {room: $scope.id, question: questionId, comment: $scope.comments[questionId]});
			$scope.comments[questionId] = "";
		};
		$scope.plusClick = function(questionId){
			console.log(questionId);
			console.log("plus");
			if(!$cookies.get("like_" + questionId)) {
				socketio.emit("addPlus", {room: $scope.id, question: questionId});
			} else if($cookies.get("like_" + questionId) === "minus"){
				socketio.emit("removeMinus", {room: $scope.id, question: questionId});
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
				socketio.emit("removePlus", {room: $scope.id, question: questionId});
				socketio.emit("addMinus", {room: $scope.id, question: questionId});
			}
			$cookies.put("like_" + questionId, "minus");
			for(var question in $scope.questions){
				$scope.questions[question].like = $cookies.get("like_" + $scope.questions[question]._id);
			}
		};
	}
})();

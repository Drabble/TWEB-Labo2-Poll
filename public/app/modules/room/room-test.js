(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:roomTest
	 * @description
	 * # roomTest
	 * Test of the room Module 
	 * 
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	describe('room test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('githubexplorer');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('RoomCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();

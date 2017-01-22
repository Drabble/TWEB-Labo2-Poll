(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:roomCreateTest
	 * @description
	 * # roomCreateTest
	 * Test of the roomCreate Module 
	 * 
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	describe('roomCreate test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('poll');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('RoomCreateCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();

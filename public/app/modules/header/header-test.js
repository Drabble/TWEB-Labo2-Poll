(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:headerTest
	 * @description
	 * # headerTest
	 * Test of the Header Module
	 * 
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	describe('header test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('poll');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('HeaderCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:sidebarTest
	 * @description
	 * # gsidebarTest
	 * Test of the sidebar of the Pollspeak app
	 * 
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	describe('login test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('poll');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('LoginCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();

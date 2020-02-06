(function (angular) {
	'use strict';

	function AppController($scope, $rootScope) {
		$scope.CurrentYear = new Date().getFullYear();
		$rootScope.CurrentUser = {Role:''};

		$rootScope.GetSkin = function() {
			if ($rootScope.CurrentUser.Role.toLowerCase() === 'office' || $rootScope.CurrentUser.Role.toLowerCase() === 'enterprise') {
				return 'skin-1';
			} else {
				return 'skin-3';
			}
		}
	};

	angular
		.module('App')
		.controller('AppController', AppController);
})(angular);
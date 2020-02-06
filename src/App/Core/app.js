(function (angular) {
	'use strict';

	angular.module('Data', []);

	angular.module('App', [
		'Data'
		, 'ngAnimate'
		, 'ui.router'
		, 'ui.bootstrap'
		, 'ui.sortable'
		, 'blockUI'
		, 'ui.calendar'
		, 'flow'
	]);

	angular.module('App').run(["$rootScope", "$state", function ($rootScope, $state) {
		$rootScope.$state = $state;

		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
			$('html,body').animate({ scrollTop: 0 }, 800);
		});

	}]);
})(angular);
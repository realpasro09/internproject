﻿(function () {
	'use strict';

	function pageTitle($rootScope, $timeout) {
		return {
			link: function (scope, element) {
				var listener = function (event, toState, toParams, fromState, fromParams) {
					// Default title - load on Dashboard 1
					var title = 'CaseFlow | Management System';
					// Create your own title pattern
					if (toState.data && toState.data.pageTitle) title = 'CaseFlow | ' + toState.data.pageTitle;
					$timeout(function () {
						element.text(title);
					});
				};
				$rootScope.$on('$stateChangeStart', listener);
			}
		}
	};

	angular
		.module('App')
		.directive('pageTitle', pageTitle);
})();
(function () {
	'use strict';

	/**
	* sideNavigation - Directive for run metsiMenu on sidebar navigation
	*/
	function sideNavigation($timeout) {
		return {
			restrict: 'A',
			link: function (scope, element) {
				// Call the metsiMenu plugin and plug it to sidebar navigation
				$timeout(function () {
					element.metisMenu();
				});
			}
		};
	};


	angular
		.module('App')
		.directive('sideNavigation', sideNavigation);
})();
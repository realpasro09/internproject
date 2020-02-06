(function () {
	'use strict';

	/**
	* iboxTools - Directive for iBox tools elements in right corner of ibox
	*/
	function iboxTools($timeout) {
		return {
			restrict: 'A',
			scope: true,
			templateUrl: 'App/Shared/Directives/IboxTools.html',
			controller: function ($scope, $element) {
				// Function for collapse ibox

				$scope.showhide = function () {
					var ibox = $element.closest('div.ibox');
					var icon = $element.find('i:first');
					var content = ibox.find('div.ibox-content');
					content.slideToggle(200);
					// Toggle icon from up to down
					icon.toggleClass('fa-filter').toggleClass('fa-close');
					ibox.toggleClass('').toggleClass('border-bottom');
					$timeout(function () {
						ibox.resize();
						ibox.find('[id^=map-]').resize();
					}, 50);
				},
				// Function for close ibox
					$scope.closebox = function () {
						var ibox = $element.closest('div.ibox');
						ibox.remove();
					}
			}
		};
	};


	angular
		.module('App')
		.directive('iboxTools', iboxTools);
})();
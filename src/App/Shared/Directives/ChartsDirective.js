(function (angular) {
	'use strict';
	
	// Directive for generic chart, pass in chart options
	angular.module('App').directive('hcChart', function () {
		return {
			restrict: 'E',
			template: '<div></div>',
			scope: {
				options: '='
			},
			link: function (scope, element) {
				Highcharts.chart(element[0], scope.options);
			}
		};
	});


})(angular);
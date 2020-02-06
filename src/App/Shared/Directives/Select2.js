(function (angular) {
	'use strict';


	angular.module('App').directive('customSelect2', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				options: '=?customSelect2',
				ngModel: '=',
				placeholder: '='
			},
			link: function (scope, element, attrs) {

				scope.$watch('ngModel', function (newValue, oldValue) {
					$timeout(function () {
						var defaultOptions = {
							theme: "bootstrap",
							width: '100%',
							placeholder: scope.placeholder
						};
						var options = angular.extend(defaultOptions, scope.options);
						element.select2(options).select('val', newValue);
					});
				});
			}
		};
	}]);

})(angular);
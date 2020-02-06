(function () {
	'use strict';

	function TaskAttachements($scope, $state, $uibModalInstance) {
		$scope.Close = function () {
			$uibModalInstance.dismiss('cancel');
		};
	};


	angular.module('App')
		.controller('TaskAttachements', TaskAttachements);
})();
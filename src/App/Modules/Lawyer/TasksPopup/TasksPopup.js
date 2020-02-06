(function () {
	'use strict';

	function TasksPopup($scope, $state, DData, $uibModalInstance) {

		$scope.Close = function () {
			$uibModalInstance.dismiss('cancel');
		};
	};


	angular.module('App')
		.controller('TasksPopup', TasksPopup);
})();
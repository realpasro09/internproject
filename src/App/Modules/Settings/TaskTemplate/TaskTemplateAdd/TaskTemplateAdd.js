(function () {
	'use strict';

	function TaskTemplateAdd($scope, $state, $uibModal, $uibModalInstance, DData, isEdit) {

		$scope.CaseLookups = DData.CaseLookups();
		$scope.IsEdit = isEdit;

		$scope.Save = function () {

			$uibModalInstance.close($scope.Task);
		}

		$scope.Close = function () {
			$uibModalInstance.dismiss('cancel');
		};
	};


	angular.module('App')
		.controller('TaskTemplateAdd', TaskTemplateAdd);
})();
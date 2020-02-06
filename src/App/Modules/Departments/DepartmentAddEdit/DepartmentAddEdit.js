(function () {
	'use strict';

	function DepartmentAddEdit($scope, $state, $uibModalInstance, isEdit) {

		$scope.IsEdit = isEdit;
		$scope.Close = function () {
			$uibModalInstance.dismiss('cancel');
		};
	};


	angular.module('App')
		.controller('DepartmentAddEdit', DepartmentAddEdit);
})();
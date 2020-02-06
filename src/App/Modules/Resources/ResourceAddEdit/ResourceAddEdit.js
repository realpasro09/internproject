(function () {
	'use strict';

	function ResourceAddEdit($scope, $state, $uibModalInstance, isEdit) {

		$scope.IsEdit = isEdit;
		$scope.Close = function () {
			$uibModalInstance.dismiss('cancel');
		};
	};


	angular.module('App')
		.controller('ResourceAddEdit', ResourceAddEdit);
})();
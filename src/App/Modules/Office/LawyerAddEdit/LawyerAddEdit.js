﻿(function (angular) {
	'use strict';

	function lawyerAddEdit($scope, $state, DData, $uibModalInstance, isEdit) {

		$scope.CaseLookups = DData.CaseLookups();
		$scope.IsEdit = isEdit;
		console.log($scope.IsEdit);
		$scope.Close = function () {
			$uibModalInstance.dismiss('cancel');
		};
	};


	angular.module('App')
		.controller('LawyerAddEdit', lawyerAddEdit);
})(angular);
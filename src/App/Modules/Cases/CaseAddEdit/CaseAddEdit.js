(function () {
	'use strict';

	function CaseAddEdit($scope, $state, DData) {

		$scope.CaseLookups = $scope.CaseLookups = DData.CaseLookups();

		$state.current.data.pageTitle = $state.params.isEdit === false ? 'Add New Case' : 'Edit Case';
	};
	

	angular.module('App')
		.controller('CaseAddEdit', CaseAddEdit);
})();
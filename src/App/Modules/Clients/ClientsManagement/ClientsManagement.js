(function () {
	'use strict';

	function ClientsManagement($scope, $state, DData) {

		$scope.CaseLookups = DData.CaseLookups();

		$scope.Edit = function() {
			$state.go('Master.Page.ClientAddEdit',{isEdit: true });
		};
	};


	angular.module('App')
		.controller('ClientsManagement', ClientsManagement);
})();
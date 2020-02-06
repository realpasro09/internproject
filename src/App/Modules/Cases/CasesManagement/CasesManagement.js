(function () {
	'use strict';

	function CasesManagement($scope, $state, DData, $uibModal) {

		$scope.CaseLookups = DData.CaseLookups();

		$scope.Edit = function () {
			$state.go('Master.Page.CaseAddEdit', {isEdit: true});
		};

		$scope.OpenTasks = function () {
			$state.go('Master.Page.TasksBoard');
		};

		$scope.Reset = function () {
			$scope.Filter = {
				CaseId: '',
				CaseTitle: '',
				TypeId: '',
				StageId: '',
				PriorityId: '',
				StatusId: '',
				ResponsibleId: '',
				ClientName: ''
			};
		};
	};


	angular.module('App')
		.controller('CasesManagement', CasesManagement);
})();
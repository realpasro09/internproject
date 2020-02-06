(function () {
	'use strict';

	function TasksManagement($scope, $state, $uibModal, DData) {

		$scope.TaskLookups = DData.CaseLookups();

		$scope.Edit = function (isEdit) {
			var modal = $uibModal.open({
				templateUrl: 'App/Modules/Tasks/TasksAddEdit/TasksAddEdit.html',
				controller: 'TasksAddEdit',
				size: 'lg',
				resolve: {
					isEdit: isEdit
				}
			});
		};


		$scope.Reset = function () {
			$scope.Filter = {
				CaseId: '',
				TaskTitle: '',
				ResourceId: '',
				DueDateFrom: '',
				DueDateTo: '',
				PriorityId: '',
				StatusId: '',
				TypeId: ''
			};
		};
	};


	angular.module('App')
		.controller('TasksManagement', TasksManagement);
})();
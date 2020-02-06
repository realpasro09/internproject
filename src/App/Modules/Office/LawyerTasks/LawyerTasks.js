(function (angular) {
	'use strict';

	function officeTasks($scope, $state, $uibModal, DData) {

		$scope.TaskLookups = DData.CaseLookups();
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
	};


	angular.module('App')
		.controller('OfficeTasks', officeTasks);
})(angular);
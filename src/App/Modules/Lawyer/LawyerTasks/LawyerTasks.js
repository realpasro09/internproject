(function (angular) {
	'use strict';

	function lawyerTasks($scope, $state, $uibModal, DData) {

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
	};


	angular.module('App')
		.controller('LawyerTasks', lawyerTasks);
})(angular);
(function () {
	'use strict';

	function TaskTemplateManagement($scope, $state, $uibModal, DData) {


		$scope.$watch("TypeId", function (newVal, oldVal) {

			var caseTypeId = $scope.TypeId;
			$scope.Tasks = [];
			var taskTempalte = _.findWhere($scope.TasksTemplate, { CaseTypeId: caseTypeId });

			if (taskTempalte) {
				$scope.Tasks = taskTempalte.Tasks;
			}
		});

		$scope.TaskLookups = DData.CaseLookups();
		$scope.Tasks = [];
		$scope.TypeId = 1;


		$scope.TasksTemplate = [
			{
				CaseTypeId: 1,
				Tasks: [
					{
						Title: "Acquisition 01",
						Type: "Meeting",
						Priority: "High",
						EstimatedEffort: 40 + ' hrs'
					}, {
						Title: "Acquisition 02",
						Type: "Meeting",
						Priority: "High",
						EstimatedEffort: 34 + ' hrs'
					}, {
						Title: "Acquisition 03",
						Type: "Meeting",
						Priority: "High",
						EstimatedEffort: 43 + ' hrs'
					}
				]
			}, {
				CaseTypeId: 2,
				Tasks: [
					{
						Title: "Administrative 01",
						Type: "Interview",
						Priority: "Low",
						EstimatedEffort: 45 + ' hrs'
					}
				]
			}, {
				CaseTypeId: 3,
				Tasks: [
					{
						Title: "Agreement 01",
						Type: "Meeting",
						Priority: "High",
						EstimatedEffort: 41 + ' hrs'
					}
				]
			}
		];


		$scope.TaskAddEdit = function (isEdit) {
			var modal = $uibModal.open({
				templateUrl: 'App/Modules/Settings/TaskTemplate/TaskTemplateAdd/TaskTemplateAdd.html',
				controller: 'TaskTemplateAdd',
				size: 'lg',
				resolve: {
					isEdit: isEdit
				}
			});

			modal.result.then(function (savedTask) {
				
				savedTask.Type = _.findWhere($scope.TaskLookups.TaskTypes, { Id: savedTask.TypeId }).Name;
				savedTask.Priority = _.findWhere($scope.TaskLookups.Priorities, { Id: savedTask.PriorityId }).Name;
				$scope.Tasks.push(savedTask);

			});
		};


		$scope.Delete = function (task) {
			$scope.Tasks.splice($scope.Tasks.indexOf(task), 1);
		};
	};


	angular.module('App')
		.controller('TaskTemplateManagement', TaskTemplateManagement);
})();
(function (angular) {
	'use strict';

	function officeDueDate($scope, $state, $uibModal, DData) {

		$scope.TaskLookups = DData.CaseLookups();
		$scope.sortableOptions = {
			connectWith: ".connectList"
		};

		$scope.Message = function () {
			var modal = $uibModal.open({
				templateUrl: 'App/Modules/Messages/MessagesView/MessagesView.html',
				controller: 'MessagesView',
				size: 'lg'
			});
		};

		$scope.AttachFiles = function () {
			var modal = $uibModal.open({
				templateUrl: 'App/Modules/Tasks/TaskAttachements/TaskAttachements.html',
				controller: 'TaskAttachements',
				size: 'lg'
			});
		};

		$scope.EditTask = function (isEdit) {
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
		$scope.DuedateDay = new Date().setTime(new Date().getTime() + 1 * 86400000);
		$scope.DuedateWeek = new Date().setTime(new Date().getTime() + 7 * 86400000);
		$scope.DuedateTwoWeek = new Date().setTime(new Date().getTime() + 14 * 86400000);
		$scope.DuedateThreeWeek = new Date().setTime(new Date().getTime() + 21 * 86400000);


		$scope.Open = [
			{
				statusClass: 'danger',
				statusLabel: 'danger',
				status: 'Pending',
				DueDate: $scope.DuedateDay,

				title: 'test task',
				employee: 'Michel',
				type: 'To-Do',
				date: '16.11.2015',
				tagName: 'Mark',
				resourceName: 'Sienna Miller  ($ 50)',
				Estimate: 50 + ' hr',
				Billing: '$' + 1000,
				MessageIcon: 'message-blue',
				HaveAttachment: true
			},
			{
				statusClass: 'success',
				statusLabel: 'primary',
				status: 'Done',
			 	DueDate: $scope.DuedateDay,

			 	title: 'Case New Task',
				employee: 'joseif',
				type: 'Meeting',
				date: '09.12.2015',
				tagName: 'Tag',
				resourceName: 'Sienna Miller  ($ 50)',
				Estimate: 100 + ' hr',
				Billing: '$' + 2000,
				MessageIcon: 'message-blue'
			 }, {
			 	statusClass: 'success',
			 	statusLabel: 'primary',
			 	status: 'Done',
			 	DueDate: $scope.DuedateDay,

				title: 'New Task',
				employee: 'john',
				type: 'Research',
				date: '09.12.2015',
				tagName: 'Tag',
				resourceName: 'Sienna Miller  ($ 50)',
				Estimate: 200 + ' hr',
				Billing: '$' + 4000,
				MessageIcon: 'message-red',
				MessageNumber: 1
			}
		];

		$scope.InProgress = [{
			statusClass: 'danger',
			statusLabel: 'danger',
			status: 'Pending',
			DueDate: $scope.DuedateWeek,

			title: 'test task',
			employee: 'Michel',
			type: 'To-Do',
			date: '16.11.2015',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 200 + ' hr',
			Billing: '$' + 3000,
			MessageIcon: 'message-red',
			MessageNumber: 2,
			HaveAttachment: true
			
		}, {
			statusClass: 'warning',
			statusLabel: 'warning',
			status: 'In Progress',
			DueDate: $scope.DuedateWeek,

			title: 'Case New Task',
			employee: 'joseif',
			type: 'Meeting',
			date: '09.12.2015',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 100 + ' hr',
			Billing: '$' + 1000,
			MessageIcon: 'message-blue'
		}, {
			statusClass: 'warning',
			statusLabel: 'warning',
			status: 'In Progress',
			DueDate: $scope.DuedateWeek,

			title: 'test task',
			employee: 'Michel',
			type: 'To-Do',
			date: '16.11.2015',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 300 + ' hr',
			Billing: '$' + 5000,
			MessageIcon: 'message-blue',
			HaveAttachment: true
		}, {
			statusLabel: 'primary',
			statusClass: 'success',
			DueDate: $scope.DuedateWeek,
			status: 'Done',

			title: 'test task',
			employee: 'Michel',
			type: 'To-Do',
			date: '16.11.2015',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 150 + ' hr',
			Billing: '$' + 6000,
			MessageIcon: 'message-red',
			MessageNumber: 1

		}];


		$scope.Pending = [{
			statusClass: 'info',
			statusLabel: 'success',
			status: 'Open',
			DueDate: $scope.DuedateTwoWeek,

			title: 'revise',
			employee: 'john',
			type: 'Research',
			date: '16.11.2015',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 100 + ' hr',
			Billing: '$' + 2000,
			MessageIcon: 'message-blue',
			HaveAttachment: true
		}];

		$scope.Done = [{
			statusClass: 'info',
			statusLabel: 'success',
			status: 'Open',
			DueDate: $scope.DuedateThreeWeek,

			title: 'Open task',
			employee: 'unknown',
			type: 'Research',
			date: '12.10.2015',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 300 + ' hr',
			Billing: '$' + 6000,
			MessageIcon: 'message-blue'
		},  {
			statusClass: 'info',
			statusLabel: 'success',
			DueDate: $scope.DuedateThreeWeek,
			status: 'Open',

			title: 'init',
			employee: 'pending',
			type: 'meeting',
			date: '05.04.2015',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 200 + ' hr',
			Billing: '$' + 4000,
			MessageIcon: 'message-red',
			MessageNumber: 2,
			HaveAttachment: true

		}];

	};


	angular.module('App')
		.controller('OfficeDueDate', officeDueDate);
})(angular);
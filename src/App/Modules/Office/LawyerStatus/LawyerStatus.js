(function (angular) {
	'use strict';

	function officeStatus($scope, $state, $uibModal, DData) {

		$scope.TaskLookups = DData.CaseLookups();

		$scope.sortableOptions = {
			connectWith: ".connectList"
		};

		$scope.Message = function() {
			var modal = $uibModal.open({
				templateUrl: 'App/Modules/Messages/MessagesView/MessagesView.html',
				controller: 'MessagesView',
				size: 'lg'
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

		$scope.AttachFiles = function () {
			var modal = $uibModal.open({
				templateUrl: 'App/Modules/Tasks/TaskAttachements/TaskAttachements.html',
				controller: 'TaskAttachements',
				size: 'lg'
			});
		};

		$scope.EditTask = function (isEdit) {
			var modal = $uibModal.open({
				templateUrl: 'App/Modules/Lawyer/LawyerAddEdit/LawyerAddEdit.html',
				controller: 'LawyerAddEdit',
				size: 'lg',
				resolve: {
					isEdit: isEdit
				}
			});
		};
		//new Date(new Date(myStringDate).getTime() + 60 * 60 * 24 * 1000);
		$scope.DuedateDay = new Date().setTime(new Date().getTime() + 1 * 86400000);
		$scope.DuedateWeek = new Date().setTime(new Date().getTime() + 7 * 86400000);
		$scope.DuedateTwoWeek = new Date().setTime(new Date().getTime() + 14 * 86400000);
		$scope.DuedateThreeWeek = new Date().setTime(new Date().getTime() + 21 * 86400000);

		$scope.Open = [{
			title: 'Case New Task',
			employee: 'joseif',
			type: 'Meeting',
			date: '09.12.2015',
			DueDate: $scope.DuedateWeek,
			statusClass: 'warning',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 50 + ' hr',
			Billing: '$' + 1000,
			MessageIcon: 'message-blue',
			HaveAttachment: true
		}, {
			title: 'init',
			employee: 'pending',
			type: 'meeting',
			date: '05.04.2015',
			DueDate: $scope.DuedateTwoWeek,
			statusClass: 'success',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 100 + ' hr',
			Billing: '$' + 3000,
			MessageIcon: 'message-blue',
			HaveAttachment: false
		},
		{
			title: 'Case New Task',
			employee: 'joseif',
			type: 'Meeting',
			date: '09.12.2015',
			DueDate: $scope.DuedateThreeWeek,
			statusClass: 'info',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 150 + ' hr',
			Billing: '$' + 4000,
			MessageIcon: 'message-red',
			MessageNumber: 2,
			HaveAttachment: true
		}];

		$scope.InProgress = [{
			title: 'New Task',
			employee: 'john',
			type: 'Research',
			date: '09.12.2015',
			DueDate: $scope.DuedateDay,
			statusClass: 'danger',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 50 + ' hr',
			Billing: '$' + 1000,
			MessageIcon: 'message-red',
			MessageNumber: 1,
			HaveAttachment: false
		}, {
			title: 'test task',
			employee: 'Michel',
			type: 'To-Do',
			date: '16.11.2015',
			DueDate: $scope.DuedateWeek,
			statusClass: 'warning',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 100 + ' hr',
			Billing: '$' + 1000,
			MessageIcon: 'message-blue',
			HaveAttachment: true
		}, {
			title: 'Open task',
			employee: 'unknown',
			type: 'Research',
			date: '12.10.2015',
			DueDate: $scope.DuedateTwoWeek,
			statusClass: 'success',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 200 + ' hr',
			Billing: '$' + 4000,
			MessageIcon: 'message-blue',
			HaveAttachment: true
		}];


		$scope.Pending = [{
			title: 'test task',
			employee: 'Michel',
			type: 'To-Do',
			date: '16.11.2015',
			DueDate: $scope.DuedateDay,
			statusClass: 'danger',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 250 + ' hr',
			Billing: '$' + 4000,
			MessageIcon: 'message-red',
			MessageNumber: 1,
			HaveAttachment: false
		}, {
			title: 'test task',
			employee: 'Michel',
			type: 'To-Do',
			date: '16.11.2015',
			DueDate: $scope.DuedateThreeWeek,
			statusClass: 'info',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 300 + ' hr',
			Billing: '$' + 1000,
			MessageIcon: 'message-blue',
			HaveAttachment: true
		}];

		$scope.Done = [
			{
				title: 'Case New Task',
				employee: 'joseif',
				type: 'Meeting',
				date: '09.12.2015',
				DueDate: $scope.DuedateDay,
				statusClass: 'danger',
				tagName: 'Tag',
				resourceName: 'Sienna Miller  ($ 50)',
				Estimate: 200 + ' hr',
				Billing: '$' + 2000,
				MessageIcon: 'message-blue',
				HaveAttachment: true
			}, {
				title: 'New Task',
				employee: 'john',
				type: 'Research',
				date: '09.12.2015',
				DueDate: $scope.DuedateThreeWeek,
				statusClass: 'info',
				tagName: 'Tag',
				resourceName: 'Sienna Miller  ($ 50)',
				Estimate: 100 + ' hr',
				Billing: '$' + 4000,
				MessageIcon: 'message-red',
				MessageNumber: 3,
				HaveAttachment: false
			}
		];

	};

	angular.module('App')
		.controller('OfficeStatus', officeStatus);
})(angular);
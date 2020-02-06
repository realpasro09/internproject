(function () {
	'use strict';

	function TasksBoard($scope, $state, $uibModal) {
		$scope.sortableOptions = {
			connectWith: ".connectList"
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

		$scope.Open = [{
			title: 'Open task',
			employee: 'unknown',
			type: 'Research',
			date: '12.10.2015',
			statusClass: 'warning',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'init',
			employee: 'pending',
			type: 'meeting',
			date: '05.04.2015',
			statusClass: 'success',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'revise',
			employee: 'john',
			type: 'Research',
			date: '16.11.2015',
			statusClass: 'info',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}];

		$scope.InProgress = [{
			title: 'test task',
			employee: 'Michel',
			type: 'To-Do',
			date: '16.11.2015',
			statusClass: 'info',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'Case New Task',
			employee: 'joseif',
			type: 'Meeting',
			date: '09.12.2015',
			statusClass: 'warning',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'New Task',
			employee: 'john',
			type: 'Research',
			date: '09.12.2015',
			statusClass: 'warning',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'Case Issue',
			employee: 'Mody',
			type: 'Research',
			date: '05.04.2015',
			statusClass: 'success',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}];


		$scope.Pending = [{
			title: 'test task',
			employee: 'Michel',
			type: 'To-Do',
			date: '16.11.2015',
			statusClass: 'info',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'Case New Task',
			employee: 'joseif',
			type: 'Meeting',
			date: '09.12.2015',
			statusClass: 'warning',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'test task',
			employee: 'Michel',
			type: 'To-Do',
			date: '16.11.2015',
			statusClass: 'info',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'Case New Task',
			employee: 'joseif',
			type: 'Meeting',
			date: '09.12.2015',
			statusClass: 'warning',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'New Task',
			employee: 'john',
			type: 'Research',
			date: '09.12.2015',
			statusClass: 'warning',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}];

		$scope.Done = [{
			title: 'test task',
			employee: 'Michel',
			type: 'To-Do',
			date: '16.11.2015',
			statusClass: 'info',
			tagName: 'Mark',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'Case New Task',
			employee: 'joseif',
			type: 'Meeting',
			date: '09.12.2015',
			statusClass: 'warning',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}, {
			title: 'New Task',
			employee: 'john',
			type: 'Research',
			date: '09.12.2015',
			statusClass: 'warning',
			tagName: 'Tag',
			resourceName: 'Sienna Miller  ($ 50)',
			Estimate: 800 + ' hr',
			Billing: '$' + 4000 
		}];
	};


	angular.module('App')
		.controller('TasksBoard', TasksBoard);
})();
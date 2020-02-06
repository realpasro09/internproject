(function () {
	'use strict';

	function LawyerCalendar($scope, $state, $compile, $uibModal, uiCalendarConfig) {

		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();

		var events = [
		  { title: 'Add Documents', start: new Date(y, m, 1), className: 'open' },
		  { title: 'Revise', start: new Date(y, m, d - 5), className: 'pending' },
		  { id: 999, title: 'Meeting Client', start: new Date(y, m, d - 3, 16, 0), allDay: false, className: 'in-progress' },
		  { id: 999, title: 'Record Feedback', start: new Date(y, m, d + 4, 16, 0), allDay: false, className: 'closed' },
		  { title: 'Review Case', start: new Date(y, m, d + 1, 19, 0), allDay: false, className: 'in-progress' }
		];

		$scope.uiConfig = {
			calendar: {
				height: 550,
				editable: true,
				header: {
					left: 'month agendaWeek',
					center: 'title',
					right: 'today prev,next'
				},
				eventClick: function () {
					$uibModal.open({
						templateUrl: 'App/Modules/Tasks/TasksAddEdit/TasksAddEdit.html',
						controller: 'TasksAddEdit',
						size: 'lg',
						resolve: {
							isEdit: true
						}
					});

				},
				eventDrop: $scope.alertOnDrop,
				eventResize: $scope.alertOnResize,
				eventRender: $scope.eventRender
			}
		};

		$scope.eventSources = [events];
	};


	angular.module('App')
		.controller('LawyerCalendar', LawyerCalendar);
})();
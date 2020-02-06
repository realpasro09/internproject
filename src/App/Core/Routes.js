(function (angular) {
	'use strict';

	function AppRoutes($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/Login");

		$stateProvider
			.state('Login', {
				url: "/Login",
				templateUrl: "App/Modules/Login/Login.html",
				controller: 'Login'
			})
			.state('Master', {
				abstract: true,
				url: "/Master",
				templateUrl: "App/Shared/Layout/Master.html"
			})
			.state('Master.Page', {
				url: "/Page",
				templateUrl: "App/Shared/Layout/Page.html"
			})
			.state('Master.Page.CasesManagement', {
				url: "/CasesManagement",
				templateUrl: "App/Modules/Cases/CasesManagement/CasesManagement.html",
				controller: 'CasesManagement',
				data: { pageTitle: 'Case Management' }
			})
			.state('Master.Page.CaseAddEdit', {
				url: "/CaseAddEdit",
				params: { isEdit: false },
				templateUrl: "App/Modules/Cases/CaseAddEdit/CaseAddEdit.html",
				controller: 'CaseAddEdit',
				data: { pageTitle: '' }
			})
			.state('Master.Page.CaseBoard', {
				url: "/CaseBoard",
				templateUrl: "App/Modules/Cases/CaseBoard/CaseBoard.html",
				controller: 'CaseBoard',
				data: { pageTitle: 'Case Board' }
			})
			.state('Master.Page.TasksManagement', {
				url: "/TasksManagement",
				templateUrl: "App/Modules/Tasks/TasksManagement/TasksManagement.html",
				controller: 'TasksManagement',
				data: { pageTitle: 'Tasks Management' }
			})
			.state('Master.Page.TasksBoard', {
				url: "/TasksBoard",
				templateUrl: "App/Modules/Tasks/TasksBoard/TasksBoard.html",
				controller: 'TasksBoard',
				data: { pageTitle: 'Tasks Board' }
			})
			.state('Master.Page.ClientAddEdit', {
				url: "/ClientAddEdit",
				params: { isEdit: false },
				templateUrl: "App/Modules/Clients/ClientAddEdit/ClientAddEdit.html",
				controller: 'ClientAddEdit',
				data: { pageTitle: 'Add New Client' }
			})
			.state('Master.Page.ClientsManagement', {
				url: "/ClientsManagement",
				templateUrl: "App/Modules/Clients/ClientsManagement/ClientsManagement.html",
				controller: 'ClientsManagement',
				data: { pageTitle: 'Clients Management' }
			})
			.state('Master.Page.TaskTemplateManagement', {
				url: "/TaskTemplateManagement",
				templateUrl: "App/Modules/Settings/TaskTemplate/TaskTemplateManagement/TaskTemplateManagement.html",
				controller: 'TaskTemplateManagement',
				data: { pageTitle: 'Task Template' }
			})
			.state('Master.Page.ResourcesManagement', {
				url: "/ResourcesManagement",
				templateUrl: "App/Modules/Resources/ResourcesManagement/ResourcesManagement.html",
				controller: 'ResourcesManagement',
				data: { pageTitle: 'Resources Management' }
			})

			.state('Master.Page.Lawyer', {
				abstract: true,
				url: "^/Lawyer",
				template: "<div data-ui-view></div>"
			})

			.state('Master.Page.Lawyer.LawyerTasks', {
				url: "^/LawyerTasks",
				templateUrl: "App/Modules/Lawyer/LawyerTasks/LawyerTasks.html",
				controller: 'LawyerTasks',
				data: { pageTitle: 'My Tasks' }
			})

			.state('Master.Page.Lawyer.LawyerStatus', {
				url: "^/LawyerStatus",
				templateUrl: "App/Modules/Lawyer/LawyerStatus/LawyerStatus.html",
				controller: 'LawyerStatus',
				data: { pageTitle: 'Tasks Status' }
			})

			.state('Master.Page.Lawyer.LawyerDueDate', {
				url: "^/LawyerDueDate",
				templateUrl: "App/Modules/Lawyer/LawyerDueDate/LawyerDueDate.html",
				controller: 'LawyerDueDate',
				data: { pageTitle: 'Tasks DueDate' }
			})

			.state('Master.Page.Lawyer.LawyerDashboard', {
				url: "^/LawyerDashboard",
				templateUrl: "App/Modules/Lawyer/LawyerDashboard/LawyerDashboard.html",
				controller: 'LawyerDashboard',
				data: { pageTitle: 'My Dashboard' }
			})

			.state('Master.Page.Lawyer.LawyerCalendar', {
				url: "^/LawyerCalendar",
				templateUrl: "App/Modules/Lawyer/LawyerCalendar/LawyerCalendar.html",
				controller: 'LawyerCalendar',
				data: { pageTitle: 'My Calendar' }
			})

			.state('Master.Page.MessagesCenter', {
				url: "^/MessageCenter",
				templateUrl: "App/Modules/Messages/MessagesCenter/MessagesCenter.html",
				controller: 'MessagesCenter',
				data: { pageTitle: 'Messages Center' }
			})

			.state('Master.Page.Office', {
				abstract: true,
				url: "^/Office",
				template: "<div data-ui-view></div>"
			})

			.state('Master.Page.Office.LawyerTasks', {
				url: "^/OfficeTasks",
				templateUrl: "App/Modules/Office/LawyerTasks/LawyerTasks.html",
				controller: 'OfficeTasks',
				data: { pageTitle: 'My Tasks' }
			})

			.state('Master.Page.Office.LawyerStatus', {
				url: "^/OfficeStatus",
				templateUrl: "App/Modules/Office/LawyerStatus/LawyerStatus.html",
				controller: 'OfficeStatus',
				data: { pageTitle: 'Tasks Status' }
			})

			.state('Master.Page.Office.LawyerDueDate', {
				url: "^/OfficeDueDate",
				templateUrl: "App/Modules/Office/LawyerDueDate/LawyerDueDate.html",
				controller: 'OfficeDueDate',
				data: { pageTitle: 'Tasks DueDate' }
			})

			.state('Master.Page.Office.LawyerDashboard', {
				url: "^/OfficeDashboard",
				templateUrl: "App/Modules/Office/LawyerDashboard/LawyerDashboard.html",
				controller: 'OfficeDashboard',
				data: { pageTitle: 'My Dashboard' }
			})

			.state('Master.Page.Office.LawyerCalendar', {
				url: "^/OfficeCalendar",
				templateUrl: "App/Modules/Office/LawyerCalendar/LawyerCalendar.html",
				controller: 'OfficeCalendar',
				data: { pageTitle: 'My Calendar' }
			})

			.state('Master.Page.Office.DepartmentsManagement', {
				url: "^/DepartmentsManagement",
				templateUrl: "App/Modules/Departments/DepartmentsManagement/DepartmentsManagement.html",
				controller: 'DepartmentsManagement',
				data: { pageTitle: 'Departments Management' }
			});
	}

	angular
		.module('App')
		.config(AppRoutes);
})(angular);
(function () {
	'use strict';

	function DData() {
		return {
			CaseLookups: function () {
				return {
					Statuses: [{ Name: 'Request Initiated', Id: 1 },
							   { Name: 'In Progress', Id: 2 },
							   { Name: 'Pending Internal', Id: 3 },
							   { Name: 'Pending External', Id: 4 },
							   { Name: 'Cancelled', Id: 5 },
							   { Name: 'Closed', Id: 6 }
					],
					Types: [{ Name: 'Acquisition', Id: 1 },
							{ Name: 'Administrative', Id: 2 },
							{ Name: 'Agreement', Id: 3 },
							{ Name: 'Audit', Id: 4 },
							{ Name: 'Civil', Id: 5 },
							{ Name: 'Commercial', Id: 6 },
							{ Name: 'Consultation', Id: 7 },
							{ Name: 'Corporate', Id: 8 },
							{ Name: 'Criminal', Id: 9 },
							{ Name: 'Dispute', Id: 10 },
							{ Name: 'Due Diligence', Id: 11 },
							{ Name: 'Labor', Id: 12 },
							{ Name: 'Real Estate', Id: 14 },
							{ Name: 'Sharia/Legacy', Id: 15 }
					],
					Stages: [{ Name: 'Appeal Travel Ban', Id: 1 },
							{ Name: 'Arbitration', Id: 2 },
							{ Name: 'Assembly Meeting', Id: 3 },
							{ Name: 'BOD meeting', Id: 4 },
							{ Name: 'Dispute', Id: 5 },
							{ Name: 'Due Diligence', Id: 6 },
							{ Name: 'Execution', Id: 7 },
							{ Name: 'Grievance Board', Id: 8 },
							{ Name: 'Labor Arbitration Board', Id: 9 },
							{ Name: 'Other', Id: 10 },
							{ Name: 'Reconciliation Committee', Id: 11 },
							{ Name: 'Settled/Closed', Id: 12 },
							{ Name: 'Under Settlement', Id: 13 }
					],
					Priorities: [{ Name: 'critical', Id: 1 },
								 { Name: 'high', Id: 2 },
								 { Name: 'medium', Id: 3 },
								 { Name: 'low', Id: 4 }
					],
					TaskStatus: [{ Name: 'Open', Id: 1 },
							     { Name: 'In Progress', Id: 2 },
							     { Name: 'Pending', Id: 3 },
							     { Name: 'Done', Id: 4 }
					],
					Titles: [{ Name: 'Dr', Id: 1 },
							 { Name: 'Judge', Id: 2 },
							 { Name: 'Me', Id: 3 },
							 { Name: 'Miss', Id: 4 },
							 { Name: 'Mr', Id: 5 },
							 { Name: 'Mrs', Id: 6 },
							 { Name: 'Sen', Id: 7 }
					],
					TaskTypes: [{ Name: 'Expert Meeting', Id: 1 },
							    { Name: 'Meeting', Id: 2 },
								{ Name: 'Research', Id: 3 },
								{ Name: 'To-Do', Id: 4 }
					],
					TasksTemplate: [
						{
							CaseTypeId: 1,
							Tasks: [
								{
									Title: "Task 1",
									Type: "Meeting",
									Priority:"High"
								}
							]
						},
							{ Name: 'Administrative', Id: 2 },
							{ Name: 'Agreement', Id: 3 },
							{ Name: 'Audit', Id: 4 },
							{ Name: 'Civil', Id: 5 },
							{ Name: 'Commercial', Id: 6 },
							{ Name: 'Consultation', Id: 7 },
							{ Name: 'Corporate', Id: 8 },
							{ Name: 'Criminal', Id: 9 },
							{ Name: 'Dispute', Id: 10 },
							{ Name: 'Due Diligence', Id: 11 },
							{ Name: 'Labor', Id: 12 },
							{ Name: 'Real Estate', Id: 14 },
							{ Name: 'Sharia/Legacy', Id: 15 }
					]

				}
			}
		};
	}

	angular.module('Data')
		.factory('DData', DData);
})();
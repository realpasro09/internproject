(function () {
	'use strict';

	function MessagesCenter($scope, $state, $uibModal) {

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
	};


	angular.module('App')
		.controller('MessagesCenter', MessagesCenter);
})();
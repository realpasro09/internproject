(function () {
	'use strict';

	function DepartmentsManagement($scope, $state, $uibModal) {

		$scope.Edit = function (isEdit) {
			var modal = $uibModal.open({
				templateUrl: 'App/Modules/Departments/DepartmentAddEdit/DepartmentAddEdit.html',
				controller: 'DepartmentAddEdit',
				size: 'lg',
				resolve: {
					isEdit: isEdit
				}
			});
		};
	};


	angular.module('App')
		.controller('DepartmentsManagement', DepartmentsManagement);
})();
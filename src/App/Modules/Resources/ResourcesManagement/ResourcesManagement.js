(function () {
	'use strict';

	function ResourcesManagement($scope, $state, $uibModal) {

		$scope.Edit = function (isEdit) {
			var modal = $uibModal.open({
				templateUrl: 'App/Modules/Resources/ResourceAddEdit/ResourceAddEdit.html',
				controller: 'ResourceAddEdit',
				size: 'lg',
				resolve: {
					isEdit: isEdit
				}
			});
		};
	};


	angular.module('App')
		.controller('ResourcesManagement', ResourcesManagement);
})();
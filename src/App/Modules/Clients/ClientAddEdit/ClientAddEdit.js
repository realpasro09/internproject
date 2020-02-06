(function () {
	'use strict';

	function ClientAddEdit($scope, $state, DData) {

		$scope.CaseLookups = DData.CaseLookups();
		$state.current.data.pageTitle = $state.params.isEdit === false ? 'Add New Client' : 'Edit Client';
		$scope.Save = function () {
			toaster.success({
				body: "Hi, welcome to Inspinia. This is example of Toastr notification box.",
				'close-button': true
			});
		};
	};


	angular.module('App')
		.controller('ClientAddEdit', ClientAddEdit);
})();
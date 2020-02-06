(function (angular) {
	'use strict';

	function Login($scope, $state, $rootScope) {

		$scope.Credential = {
			UserName: '',
			Password: ''
		};

		$scope.Login = function () {

			if ($scope.Credential.UserName.toLowerCase() === 'admin') {
				$state.go('Master.Page.CasesManagement');
				$rootScope.CurrentUser.Role = 'admin';

			} else if ($scope.Credential.UserName.toLowerCase() === 'lawyer') {
				$state.go('Master.Page.Lawyer.LawyerDashboard');
				$rootScope.CurrentUser.Role = 'lawyer';

			} else if ($scope.Credential.UserName.toLowerCase() === 'office') {
				$state.go('Master.Page.Office.LawyerDashboard');
				$rootScope.CurrentUser.Role = 'office';

			} else if ($scope.Credential.UserName.toLowerCase() === 'enterprise') {
				$state.go('Master.Page.Office.LawyerDashboard');
				$rootScope.CurrentUser.Role = 'enterprise';
			}
			else {
				alert('UserName has to be Admin or Lawyer or Office or Enterprise');
			}
		}
	};


	angular.module('App')
		.controller('Login', Login);
})(angular);
(function () {
	'use strict';

	function MessagesView($scope, $state, $uibModalInstance) {

		$scope.Close = function () {
			$uibModalInstance.dismiss('cancel');
		};
		
		$scope.Users = [
			{
				Id: 1,
				Name: 'John'
			}, {
				Id: 2,
				Name: 'Josief'
			}, {
				Id: 3,
				Name: 'Martin'
			}, {
				Id: 4,
				Name: 'David'
			}
		];

		$scope.SendMessage = function() {
			$scope.Message = '';
		};
	};



	angular.module('App')
		.controller('MessagesView', MessagesView);
})();
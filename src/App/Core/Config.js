(function () {
	'use strict';

	angular.module('App').config(["blockUIConfig", function (blockUiConfig) {
		blockUiConfig.template = '<div class="spinner"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>';
		blockUiConfig.delay = 100;

	}]);

})();
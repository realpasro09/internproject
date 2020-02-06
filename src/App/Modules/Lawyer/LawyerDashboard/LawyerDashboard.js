(function (angular) {
	'use strict';

	angular.module('App').controller('LawyerDashboard', lawyerDashboard);

	function lawyerDashboard($scope, $uibModal) {

		function openTasksPopup (title) {
			//alert(title);
			$uibModal.open({
				templateUrl: 'App/Modules/Lawyer/TasksPopup/TasksPopup.html',
				controller: 'TasksPopup',
				size: 'lg',
				resolve: {
					isEdit: true//,
					//taskType: title
				}
			});
		};
		

		$scope.ChartOptions01 = {
			chart: {
				type: 'bar'
			},
			title: {
				text: 'Out vs. In'
			},
			xAxis: {
				categories: ['Open', 'In Progress', 'Pending', 'Done', 'Fixed Billing', 'Current Profit', 'Max Profit']
			},
			credits: {
				enabled: false
			},
			
			series: [
				{
					cursor: 'pointer',
					name: 'In',
					color: '#0000FF',
					point: {
						events: {
							click: function () {
								openTasksPopup(this.name);
								//alert(this.y);
							}
						}
					},
					data: [1000, 500, 1500, 5000, 0, 2000, 8000]
				},
				{
					name: 'Out',
					color: '#FF0000',
					data: [0, 0, 0, 0, -3000, 0, 0]
				}
			]
		};


		$scope.ChartOptions02 = {
			chart: {
				type: 'pie'
			},
			title: {
				text: 'Task Count'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %'
					},
					showInLegend: true
				}
			},
			series: [
				{
					name: 'Count',
					point: {
						events: {
							click: function () {
								openTasksPopup(this.name);
								//alert(this.y);
							}
						}
					},
					data: [
						{
							name: "Open",
							y: 5,
							sliced: true,
							selected: true,
							color: '#1ab394'
						}, {
							name: "In Progress",
							y: 4,
							color: '#f8ac59'
						}, {
							name: "Pending",
							y: 3,
							color: '#ed5565'
						}
					]
				}
			]
		};


		$scope.ChartOptions03 = {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Money'
			},
			xAxis: {
				type: 'category',
				title: {
					text: 'Status'
				}
			},
			yAxis: {
				title: {
					text: 'Money ($)'
				}

			},
			legend: {
				enabled: false
			},
			tooltip: {
				enabled: false
			},
			plotOptions: {
				series: {
					cursor: 'pointer',
					borderWidth: 0,
					dataLabels: {
						enabled: true //,
						//format: '{point.y:,.1f}%'
					}
				}
			},
			series: [
				{
					point: {
						events: {
							click: function () {
								openTasksPopup(this.name);
								//alert(this.y);
							}
						}
					},
					data: [
						{
							name: "Open",
							y: 2000,
							color: '#1ab394'
						}, {
							name: "In Progress",
							y: 3000,
							color: '#f8ac59'
						}, {
							name: "Pending",
							y: 1500,
							color: '#ed5565'
						}
					]
				}
			]
		};

		$scope.ChartOptions04 = {
			chart: {
				type: 'pie'
			},
			title: {
				text: 'Hours'
			},

			plotOptions: {
				pie: {
					innerSize: 100,
					depth: 45,
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %'
					},
					showInLegend: true
				}
			},

			series: [
				{
					name: 'Hours',
					point: {
						events: {
							click: function () {
								openTasksPopup(this.name);
								//alert(this.y);
							}
						}
					},
					data: [
						{
							name: "Open",
							y: 50,
							color: '#1ab394'
						}, {
							name: "In Progress",
							y: 75,
							color: '#f8ac59'
						}, {
							name: "Pending",
							y: 25,
							color: '#ed5565'
						}
					]
				}
			]
		};

	};



})(angular);
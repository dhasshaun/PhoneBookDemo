var app = angular.module('phoneBook', [])
	.config(function (){
		console.log("Angular config has been reached");
	})
	.controller('phoneBookController', function($scope, $http){
		$scope.test = function(){
			console.log('hello from test');
		}
		// $scope.addContact = function (){
		// 	$http({
		// 		url : '/'
		// 	})
		// }
	})
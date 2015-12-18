var app = angular.module('phoneBook', [])
	.controller('phoneBookController', function($scope, $http){
		$scope.getAllContact = function(){
			$scope.contactName = null;
			$scope.contactNo = null;
			$scope.contactEmail = null;
			$http({
				url: '/getAllContact',
				method: 'get',
			}).success(function (resp){
				if(resp.resCode == 0){
					$scope.phoneContact = resp.data;
				}else{
					alert('Something went wrong, please try agian.');
				}
			}).error(function (err){
				console.log(err);
				alert("Cannot Send Request :(")
			});
		};
		$scope.addContact = function (){
			if($scope.contactForm.$valid){
				$http({
					url: '/addContact',
					method: 'post',
					params: {
						contactName: $scope.contactName,
						contactNo: $scope.contactNo,
						contactEmail: $scope.contactEmail
					}
				}).success(function(resp){
					if(resp.resCode==0){
						alert('Add Contact Succesful.');
						$scope.getAllContact();
					}else{
						alert('Something went wrong, please try agian.');
					}
				}).error(function (err){
					console.log(err);
					alert("Cannot Send Request :(")
				});
			}else{
				alert("Fill all required :)");
			}
		};
		$scope.getContact = function(contactID){
			$http({
				url: '/getContact',
				method: 'get',
				params: {
					_id: contactID
				}
			}).success(function (resp){
				if(resp.resCode==0){
					$scope.edit = resp.data;
				}else{
					alert('Something went wrong, please try agian.');
				}
			}).error(function (err){
				console.log(err);
				alert("Cannot Send Request :(")
			})
		}
		$scope.editContact = function (){
			if($scope.editForm.$valid){
				$http({
					url: '/editContact',
					method: 'get',
					params: {
						_id: $scope.edit._id,
						contactName: $scope.edit.contactName,
						contactNo: $scope.edit.contactNo,
						contactEmail: $scope.edit.contactEmail
					}
				}).success(function (resp){
					if(resp.resCode==0){
						alert('Edit Contact Succesful!');
						$scope.getAllContact();
						var btnClose = document.getElementById("closeModal");
						btnClose.click();
					}else{
						alert('Something went wrong, please try agian.');
					}
				}).error(function (err){
					console.log(err);
					alert("Cannot Send Request :(")
				})
			}else{
				alert("Fill all required :)");
			}
		};
		$scope.deleteContact = function(contactID){
			$http({
				url : '/deleteContact',
				method : 'delete',
				params : {
					_id : contactID
				}
			}).success(function(resp){
				if(resp.resCode == 0){
					alert("Remove Succesful!");
					$scope.getAllContact();
				}else{
					alert('Something went wrong, please try agian.');
				}
			}).error(function (err){
				console.log(err);
				alert("Cannot Send Request :(")
			});
		}
	})

/**
 * 
 */

angular.module('form.controller', [])

.controller('formController', ['$scope', '$location', 'formService', 'userFactory', function($scope, $location, formService, userFactory){
	$scope.users = userFactory.users;
	
	$scope.formSubmit = function(){
		formService.register($scope.user)
			.then(function success(response){
				if(response.status == 200){
					$scope.users.push($scope.user);
					$location.path("/list");
				}
			}, function fail(){
				console.error('Error...');
			});
	}
	
	$scope.resetForm = ()=>{
		$scope.user = {};
		$scope.form.$setPristine();
	}
}])

.controller('userController', ['$scope', 'formService', 'userFactory', function($scope, formService, userFactory){
	//$scope.users = formService.list();

	//userFactory.users = $scope.users;
	
	$scope.users = userFactory.users;
	
}])
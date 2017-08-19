/**
 * 
 */

angular.module('app', ['ngRoute', 'form.controller', 'form.service', 'form.directive', 'form.factory'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/index', {
		templateUrl:'/angularjs/template/register.html',
		controller:'formController'
	}).when('/list', {
		templateUrl:'/angularjs/template/list.html',
		controller:'userController'
	}).otherwise({'redirectTo':'/index'});
}])
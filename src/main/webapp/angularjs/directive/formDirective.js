/**
 * 
 */

angular.module('form.directive', [])

.directive('compare' ,function(){
	return {
		strict:'AE',
		scope:{
			pwd:'=compare'//将当前scope的pwd绑定compare指令的值
		},
		require:'ngModel',
		link:function(scope, element, attr, ngModelController){
			ngModelController.$validators.compare = (currentValue)=>{
				return currentValue === scope.pwd;//currentValue为当前指令所在的输入框中的输入值
			}
			
			scope.$watch('pwd', function(newValue, oldValue){
				ngModelController.$validate();
			})
		}
	}
})
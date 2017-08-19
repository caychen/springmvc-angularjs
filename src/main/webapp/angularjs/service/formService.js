/**
 * 
 */

angular.module('form.service', [])

.service('formService', ['$http', 'formFactory', function($http, formFactory) {
	var request = {
		doGetRegisterRequest : (user)=>{
			return $http({
				url:'user/register.do',
				method : 'get',
				params : user,// get请求的时候用params
			});
		},
		doPostRegisterRequest : (user)=>{
			return $http({
				url:'user/register.do',
				method : 'post',
				data : user,// post请求的时候可以用data或者params，不过如果使用data的时候需要多些设置，否则后台接收不到
				
				// 以下配置是为了post使用data传递参数时所用
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				transformRequest : formFactory.transform
			});
		},
		doListRequest: ()=>{
			return $http({
				url:'user/list.do',
				method:'post',
			});
		}
	};

	return {
		register : (user)=> {
			// return request.doGetRegisterRequest(user);
			 return request.doPostRegisterRequest(user);
		},
		list: ()=>{
			return request.doListRequest();
		}
	}
}]);
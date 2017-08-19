/**
 * 
 */

angular.module('form.factory', [])

.factory('formFactory', function(){
	return {
		transform :(obj)=>{
			var str = [];
			for(var key in obj){
				str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
			}
			return str.join('&');
		}
	}
})

.factory('userFactory', function(){
	return {
		users:[{
			uname:'Cay',
			password:'111111',
			email:'Cay@qq.com',
			blog:'http://www.Cay.com',
			age:20,
			gender:'男'
		},{
			uname:'Amy',
			password:'222222',
			email:'Amy@qq.com',
			blog:'http://www.Amy.com',
			age:16,
			gender:'女'
		}]
	}
});

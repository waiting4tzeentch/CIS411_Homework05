(function() {
	var app = angular.module('jsonBlog', []);

	app.controller('BlogController', ['$http',function($http){
		var blog = this;
		blog.entries = [];
		$http.get('/tutorials.json').success(function(data){
			blog.entries = data;
		});
	}]);

})();

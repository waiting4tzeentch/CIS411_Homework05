(function() {
	var app = angular.module('booklist', ['book-directives']);

	app.controller('BookController', ['$http',function($http){
		var booklist = this;

		booklist.books = [];

		$http.get('/tutorials.json').success(function(data){
			booklist.books = data;

		});
	}]);

	app.directives (angularJumbotron, function (){
		return {
			restict: 'E',
			templateUrl: 'angularJumbotron.html'
		}
	});

})();

(function() {
	var app = angular.module('book-directives', []);

	app.directive('bookDescription', function(){
		return{
			restrict: 'E',
			templateUrl:"book-description.html"
		};
	});

})();

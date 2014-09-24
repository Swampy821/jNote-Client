var appControllers = angular.module('appControllers', []);

appControllers.controller('home', function($scope, auth) {
	
});

appControllers.controller('notesMain', function($scope, $http, $window, restUrls, auth) {
	if(auth.auth===false) {
		$window.location.href = "#/";
	}
	$scope.update = function() {
		$http.get(restUrls.getNotes).success(function(data) {
    		$scope.test = data;
    	});	
    };
    $scope.update();
}).
controller('Main', function(){});
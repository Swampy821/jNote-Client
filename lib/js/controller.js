var appControllers = angular.module('appControllers', []);

appControllers.controller('notesMain', function($scope, $http, restUrls) {
	$scope.update = function() {
		$http.get(restUrls.getNotes).success(function(data) {
    		$scope.test = data;
    	});	
    };
    $scope.update();
}).
controller('Main', function(){});
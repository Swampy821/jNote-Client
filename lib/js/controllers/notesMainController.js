appControllers.controller('notesMain', function($scope, $http, $window, restUrls, auth, $cookies) {
	if($cookies.auth!=='true') {
		$window.location.href = "#/";
	}
	$scope.update = function() {
		$http.get(restUrls.getNotes).success(function(data) {
    		$scope.test = data;
    	});	
    };
    $scope.update();
})
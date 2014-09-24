appControllers.controller('home', function($scope, auth, $http, restUrls, $window, $cookies) {
	$scope.login = function() {
		var username = $scope.user.name;
		var pass = $scope.user.pass;
		$http.get(restUrls.login + '/' + username + '/' + pass).success(function(data) {
			$cookies.auth = data;
			if($cookies.auth==='true') {
				$window.location.href='#/notes';
			}
		});
	};
});



appControllers.controller('home', function($scope, auth, $http, restUrls, $window) {
	$scope.login = function() {
		var username = $scope.user.name;
		var pass = $scope.user.pass;
		$http.get(restUrls.login + '/' + username + '/' + pass).success(function(data) {
			auth.auth = data;
			if(auth.auth==='true') {
				$window.location.href='#/notes';
			}
		});
	};
});



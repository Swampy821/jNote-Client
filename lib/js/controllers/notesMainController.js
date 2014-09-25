appControllers.controller('notesMain', function($scope, $http, $window, restUrls, auth, $cookies) {
	if($cookies.auth!=='true') {
		$window.location.href = "#/";
	}
	$http.get(restUrls.getNotes).success(function(data) {
		$scope.notes = data;
	});	
	$scope.main = {
		description:'',
		title:'',
		index:-1,
		active:false,
		edit:false,
		add:false
	};

	$scope.view = function(obj, index) {
		$scope.main = {
			description: obj.description,
			title: obj.title,
			index: index,
			active: true,
			edit:false,
			add:false
		};
	};

	$scope.remove = function() {
		$http.get(restUrls.removeNote + $scope.main.index).success(function(response) {
			if(response.success===true) {
				$scope.notes.splice($scope.main.index,1);
				$scope.main = {
					description:'',
					title: '',
					index:-1,
					active:false,
					edit:false,
					add:false
				};
			}else{
				alert('Something has gone wrong while removing that note.');
			}
		});
	};

	$scope.edit = function() {
		$scope.main.edit = true;
		$scope.main.add = false;
	};
	$scope.add = function() {
		$scope.main = {
			description:'',
			title: '',
			index:-1,
			active:false,
			edit:false,
			add:true
		};
	};

});
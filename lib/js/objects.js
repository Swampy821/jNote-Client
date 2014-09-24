app.factory('restUrls', function() {
	var url = 'http://localhost:8888';
	
	return { 
		getNotes: url + '/getNotes',
		login: url + '/login'
	};
});

app.factory('auth', function() {
	return {
		auth:false
	};
});
app.factory('restUrls', function() {
	var url = 'http://localhost:8888';
	
	return { 
		getNotes: url + '/getNotes',
		login: url + '/login',
		removeNote: url + '/removeNote/',
		addNote: url + '/addNote/',
		editNote: url + '/editNote/'
	};
});

app.factory('auth', function() {
	return {
		auth:false
	};
});
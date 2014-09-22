app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/notes', {
        templateUrl: 'lib/partials/notes.html',
        controller: 'notesMain'
      }).
      when('/',{
        templateUrl: 'lib/partials/notes.html',
        controller: 'Main'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
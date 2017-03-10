var app = angular.module('mvpApp', [
  'mvpApp.jordan',
  'mvpApp.kobe',
  'mvpApp.lebron',
  'mvpApp.services',
  'ngRoute',
  'jtt_youtube'
]);


app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/jordan', {
      controller: 'jordanController',
      templateUrl: 'views/player.html'
    })
    .when('/kobe', {
      controller: 'kobeController',
      templateUrl: 'views/player.html'
    })
    .when('/lebron', {
      controller: 'lebronController',
      templateUrl: 'views/player.html'
    })
    .when('/curry', {
      controller: '',
      templateUrl: 'views/curry.html'
    })
    .otherwise({ redirectTo: '/' });
});

     
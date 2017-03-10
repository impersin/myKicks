angular.module('mvpApp.jordan', [])
.controller('jordanController', function($scope, Comment, $http, youtubeFactory) {
  $scope.player = 'Jordan';
  $scope.header = '/images/headers/jordan_header.jpg';

  // $htt.get('./jordan').then(function(res) {
  //   console.log(res);
  // });

  // Comment.getVideos('shih tzu').then(function(data) {
  //   console.log(data);
  // });
  youtubeFactory.getVideosFromSearchByParams({
    q: 'gtr',
    maxResults: 10,
    key: 'AIzaSyCaypxiN5tCAT67ATix-HQC1cM93VwqwV0'
  }).then(function (data) {
    console.info('videos from search by query', data);
  });   
  
  $scope.addComment = function() {
    Comment.addOne({username: $scope.user, comment: $scope.text}, $scope.player)
    .then(function() {
      Comment.getAll($scope.player).then(function(data) {
        $scope.comments = data;
        $scope.user = '';
        $scope.text = '';
      });
    });
  };
  
  $scope.images = [
    {
      name: ['Jordan V', 5],
      url: '/images/shoes/jordan v.jpg'
    },
              
    {
      name: ['Jordan XI', 11],
      url: '/images/shoes/jordan xi.jpg'
    },

    {
      name: ['Jordan XXIX', 29],
      url: '/images/shoes/jordan xxix.jpg'
    }
              
  ];
  
  Comment.getAll($scope.player).then(function(data) {
    $scope.comments = data;
  });

});
   
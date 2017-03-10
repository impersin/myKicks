angular.module('mvpApp.lebron', [])
.controller('lebronController', function($scope, Comment) {
  $scope.player = 'Lebron';
  $scope.header = '/images/headers/lebron_header.jpg';

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
      name: ['Lebron VI', 6],
      url: '/images/shoes/lebron vi.jpg'
    },
              
    {
      name: ['Lebron X', 10],
      url: '/images/shoes/lebron x.jpg'
    },

    {
      name: ['Lebron XI', 11],
      url: '/images/shoes/lebron xi.jpg'
    }
              
  ]; 

  Comment.getAll($scope.player).then(function(data) {
    $scope.comments = data;
  });

});
   
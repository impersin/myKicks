angular.module('mvpApp.kobe', [])
.controller('kobeController', function($scope, Comment) {
  $scope.player = 'Kobe';
  $scope.header = '/images/headers/kobe_header.jpg';
  
  $scope.addComment = function() {
    Comment.addOne({username: $scope.user, comment: $scope.text}, $scope.player)
    .then(function() {
      Comment.getAll($scope.player).then(function(data) {
        $scope.comments = data;
      //console.log("========== from  kobe.js",data);
        $scope.user = '';
        $scope.text = '';
      });
    });
  };

  $scope.images = [
  
    {
      name: ['Kobe II', 2],
      url: '/images/shoes/kobe ii.jpg'
    },
              
    {
      name: ['Kobe IV', 4],
      url: '/images/shoes/kobe iv.jpg'
    },

    {
      name: ['Kobe IX', 9],
      url: '/images/shoes/kobe ix.jpg'
    }
              
  ]; 
  

  Comment.getAll($scope.player).then(function(data) {
    $scope.comments = data;
    console.log('========== from  kobe.js', data);
  });

});  
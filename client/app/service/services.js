var app = angular.module('mvpApp.services', []);

app.factory('Comment', function ($http) {
  return {
    getAll: function(endPoint) {
      return $http({
        method: 'GET',
        url: '/' + endPoint
      })
      .then(function(resp) {
        return resp.data;
      });
    },

    addOne: function(comment, endPoint) {
      return $http({
        method: 'POST',
        url: '/' + endPoint,
        data: comment
      })
      .then(function(resp) {
        return resp;
      });
    }
    // ,
    // getVideos: function(query) {
    //   return $http({
    //     method: 'GET',
    //     url: 'https://www.googleapis.com/youtube/v3/search/videos?id=7lCDEYXw3mM&key=',
    //     part: 'snippet',
    //     key: 'AIzaSyCaypxiN5tCAT67ATix-HQC1cM93VwqwV0',
    //     q: query,
    //     maxResults: 10,
    //     type: 'video',
    //     videoEmbeddable: 'true'
    //   }).then(function(res) {
    //     return res;
    //   });
    // }
  };
});   
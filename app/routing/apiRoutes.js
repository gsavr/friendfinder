var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {     
      // Displays all friends
      app.get("/api/friends", function(req, res) {
        return res.json(friends);
      });
      
      // Create New friend
      app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        //console.log(newFriend);
        //console.log(friends);
        var matchName = '';
        var matchImage = '';
        var totalDifference = 50; 
        for (var i = 0; i < friends.length; i++) {
          var diff = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
              newFriend.scores[j]=parseInt(newFriend.scores[j])
              diff += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
            }
          console.log(diff)
              if (diff < totalDifference) {
                totalDifference = diff;
                //console.log("smallest:"+totalDifference)
                matchName = friends[i].name;
                matchImage = friends[i].photo;
              }
        }
        var newBestie={
          name:matchName,
          photo:matchImage
        }
        //console.log("best friend:"+matchName)
        //friends.push(newFriend);
        console.log(newBestie)
        res.json(newBestie);
      });
};
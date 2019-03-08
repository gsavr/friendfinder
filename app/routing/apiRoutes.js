var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        //scores new to be pushed
        friends.push(newFriend);
        res.json(newFriend);
        console.log(newFriend);
      });
};
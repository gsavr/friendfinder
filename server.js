var express = require("express");
var path = require("path");

// set up the express App
var app = express();
var PORT = process.env.PORT || 3000;

// set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up access to static files
app.use(express.static('./data/public'));
app.use(express.static('./data/routing'));

///////////
// routes to the html and api route files
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

///////////
// start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
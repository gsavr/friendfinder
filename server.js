var express = require("express");

// set up the express App
var app = express();
var PORT = process.env.PORT || 8080;

// set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up access to static files
app.use(express.static('./app/public'));

// routes to the html and api route files
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);


///////////
// start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// Required
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();

// Sets an initial port. Prevents having to reconfigure when deployed
var PORT = process.env.PORT || 8080;


// Listen

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
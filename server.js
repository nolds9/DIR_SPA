//////////////////////////////////
//  DIR Code Challenge:  Node SPA
/////////////////////////////////

// New Express App and dependencies
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require("body-parser");

// Configure Asset pipeline and Body-Parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// use handlebars for templating
// app.set("view engine", "hbs");

// Serve app's html file
app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

// load Controllers
var favoritesController = require("./app/controllers/favorites")

///////////////////
//    ROUTES    //
//////////////////

app.use("/", favoritesController)

// The process.env.PORT is for deployment to Heroku.
app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port 3000");
});

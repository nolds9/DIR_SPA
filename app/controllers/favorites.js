// Favorites Controller
var express = require("express");
var router = express.Router();

// Require Connection and Load Favorite Model
var DB = require("../../config/connection");
var Favorite = DB.models.Favorite;

// If Response not found
function error(response, message){
  response.status(500);
  response.json({error: message})
}

////////////////////////
// Favorite CRUD Routes
///////////////////////

// favorites#index
router.get("/favorites", function(req, res){
  // get all favorites
  Favorite.findAll().then(function(favorites){
    res.json(favorites);
  })
})

// favorites#create
router.post("/favorites", function(req, res){
  console.log(req.body);
  Favorite.create(req.body).then(function(favorite){
    res.json(favorite);
  });
});

// favorites#show
router.get("/favorites/:id", function(req, res){
  Favorite.findById(req.params.id).then(function(favorite){
    res.json(favorite);
  });
});

// favorites#update
router.patch("/favorites/:id", function(req, res){
  Favorite.findById(req.params.id)
  .then(function(favorite){
    if(!favorite) return error(res, "not found");
    return favorite.updateAttributes(req.body);
  })
  .then(function(favorite){
    res.json(favorite);
  });
});

router.delete("/favorites/:id", function(req, res){
  Favorite.findById(req.params.id)
  .then(function(favorite){
    if(!favorite) return error(res, "not found");
    return favorite.destroy()
  })
  .then(function(favorite){
    res.json(favorite)
  });
});

module.exports = router

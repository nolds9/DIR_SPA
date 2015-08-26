// Front-End Favorite "Class" Constructor
var Favorite = function(info){
  for (var attribute in info){
    this[attribute] = info[attribute];
  };
  // var self = this;
  // self.favorited = false;
};

Favorite.fetch = function(){
  var request = $.getJSON("/favorites")
  .then(function(response){
    var favorites = [];
    for (var i = 0; i < response.length; i++){
      favorites.push(new Favorite(response[i]));
    };
    return favorites;
  })
  .fail(function(response){
    console.log("failed to fetch favorites");
  });
  return request;
};

Favorite.create = function(favoriteData){
  var self = this;
  var url = "/favorites";
  var request = $.ajax({
    url: url,
    method: "post",
    data: JSON.stringify(favoriteData),
    contentType: "application/json"
  })
  .then(function(favoriteData){
    return new Favorite(favoriteData);   //Maybe include some error handling
  })
  return request;
};



Favorite.prototype.update = function(info){
  var self = this;
  var url = "/favorites/" + self.id;
  var request = $.ajax({
    url: url,
    method: "patch",
    data: JSON.stringify(info),
    contentType: "application/json"
  })
  .then(function(updatedFavoriteInfo){
    console.log(updatedFavoriteInfo);
    self.reload(updatedFavoriteInfo);
  })
  return request;
};

Favorite.prototype.reload = function(newData){
  var self = this;
  for (var attribute in newData){
    self[attribute] = newData[attribute];
  };
};

Favorite.prototype.destroy = function(){
  var self = this;
  var url = "/favorites/" + self.id;
  var request = $.ajax({
    url: url,
    method: "delete"
  });
  return request;
}
// // Front-End favoriteView view template constructor
// var Favorite = function(favorite){
//   this.favorite = favorite;
//   this.$el = $("<div class='favorite'></div>");
// };

// // Favorite.newfavorite = function(){
// //   var templateScript = $('#newfavoriteTemplate').html();
// //   var template = Handlebars.compile(templateScript);
// //   var html = template();
// //   $(html).find('.createfavorite').on("click", function(){
// //     console.log("Event fired");
// //   })
// //   $('.newfavorite').append(html)
// // }

// Favorite.prototype.render = function(){   //Render methods for Favorite and commentView don't match
//   var self = this;

//   self.$el.html(self.favoriteTemplate(self.favorite));

//   var favoriteButton = self.$el.find(".favoriteB");
//   // var editButton = self.$el.find(".editFavorite");
//   // var favoritesDiv = self.$el.find(".favorites");
//   // favoritesDiv.hide();
//   favoriteButton.on("click", function(){
//     	console.log("favorite button clicked") 
//     	self.changeBoolean()
//     // self.toggleFavorites(favoritesDiv);
//   });
//   editButton.on("click", function(){
//     self.renderEditForm();
//   })

//   $(".favorites").append(this.$el);
// };

// Favorite.prototype.changeBoolean = function(favorite){
// 	var self = this
// 	console.log(self.favorited)
// 	self.favorited = false
// 	console.log(self.favorited)
// }
// // Favorite.prototype.renderEditForm = function(){
// //   var self = this;
// //   self.$el.html(self.postEditTemplate(self.post));
// //   self.$el.find(".updateFavoirte").on("click", function(){
// //     self.updateFavoirte();
// //   })
// //   self.$el.find(".deleteFavorite").on("click", function(){
// //     self.post.destroy()
// //     .then(function(){
// //       self.$el.slideUp();
// //     });
// //   })
// // };

// // Favorite.prototype.updateFavoirte = function(){
// //   var self = this;
// //   var data = {
// //     title: $("input[name=title]").val(),
// //     status: $("input[name=status]").val(),
// //     body: $("textarea").val()
// //   };
// //   self.post.update(data).then(function(){
// //     self.render();
// //   });
// // }

// Favorite.prototype.favoriteTemplate = function(favorite){ //Think favoriteTemplate shouldn't require an argument
//   var templateScript = $("#favoriteTemplate").html();
//   var template = Handlebars.compile(templateScript);
//   var html = template(favorite);
//   return html
// };

// // Favorite.prototype.favoriteEditTemplate = function(favorite){
// //   var templateScript = $('#favoriteEditTemplate').html();
// //   var template = Handlebars.compile(templateScript);
// //   var html = template(favorite);
// //   return html
// // }
// // Favorite.prototype.toggleFavorites = function(favoritesDiv){
// //   var self = this;
// //   if (favoritesDiv.children().length === 0){
// //     self.post.fetchFavorites()
// //     .then(function(Favorites){
// //       self.appendFavorites(Favorites, favoritesDiv)
// //     })
// //   }
// //   favoritesDiv.toggle();
// //   self.toggleButton(favoritesDiv);
// // };

// // Favorite.prototype.appendFavorites = function(Favorites, favoritesDiv){
// //   Favorites.forEach(function(comment){
// //     var commentView = new CommentView(comment);
// //     favoritesDiv.append(commentView.render());
// //   })
// // };

// // Favorite.prototype.toggleButton = function(favoritesDiv){
// //   if (favoritesDiv.is(":visible")){
// //     favoritesDiv.siblings("button.showFavorites").text("Hide Favorites");
// //   }
// //   else {
// //     favoritesDiv.siblings("button.showFavorites").text("Show Favorites");
// //   }
// // };
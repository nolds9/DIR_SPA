$(document).ready(function(){

 // Favorite.fetch().then(function(favorites){
 //    favorites.forEach(function(favorite){
 //      var view = new FavoriteView(Favorite);
 //      view.render();
 //    })
 //  })

  // Define movie browser as an object
  var movieBrowser = {
    //query OMDB with keyword
    search:  function (keyword) {
        var self = this;
        var url = 'http://www.omdbapi.com/?s='+escape(keyword);

        $.getJSON(url)
        // After making request, invoke function to pass along results to next api call
        .done(function(imdbResponse){

          self.imdbDone(keyword, imdbResponse);
        })
        // Could not find any results matching keyword
        .fail(function(imdbResonse, textStatus, errorMessage){
          var message = "Sorry, we had issues retrieving movie data for '" + keyword + "'";
          if (errorMessage){
            message += "(" + errorMessage + ")";
          }
          message += ".  Please try again.";
          $('#movie-detail').html("<h2 class='fail'>" + message + "</h2>");
        });
    },
    // Populate select options with results from query
    imdbDone:   function (searchKeyword, imdbSearchData) {
      var display = '<option value="">Movies matching "'+ searchKeyword +'"...</option>';

      for (var i=0; i < imdbSearchData.Search.length; i++) {
        var movie = imdbSearchData.Search[i];
        display += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('');
      }

      $('#movie-select').show().html(display);
    },
    //show selected result's info and poster
    show:   function(imdbId) {
      if (!imdbId) return;

      var url = 'http://www.omdbapi.com/?i='+imdbId;

      $.getJSON(url).then(function(imdbMovieData) {
        var detail = '<h2>' + imdbMovieData.Title + '</h2>';
        detail += '<img src="'+ imdbMovieData.Poster +'" alt="'+ imdbMovieData.Title +'">';
        $('#movie-detail').html(detail);
      });
    },
    favorite: function(movie){
       console.log("In creae function")
        var self = this;
        var url = "/favorites";
        var request = $.ajax({
          url: url,
          method: "post",
          data: JSON.stringify(movie),
          contentType: "application/json"
        })
        .then(function(movie){
          console.log("About to create a new favorite")
          console.log(movie)
           console.log("Favorite Button CLicked")
          movieTitle = $("h2").text()
           console.log(movieTitle)
         return new Favorite(movie);   //Maybe include some error handling
        })
        return request;
      }
  } 

  // Add Event Listeners
    // Search form:
    $('#search').on('submit', function(evt) {
      evt.preventDefault();
      var $search = $('#movie-search');
      var keyword = $search.val();
      $search.val('');

      movieBrowser.search(keyword);
    });

    // Movie selector:
    $('#movie-select').hide().on('change', function() {
      movieBrowser.show(this.value);
    });

    // Favorite Button
       var favoriteButton = $(".favoriteB")
       favoriteButton.on("click", function(test){
       console.log("Favorite Button CLicked")
       movieTitle = $("h2").text()
       console.log(movieTitle)
       console.log(test)
       var isClicked = true
       movieBrowser.favorite({title: movieTitle, favorited: isClicked})

    })    

    // var favoriteButton = $(".favoriteB")
    // favoriteButton.on("click", function(favoriteData){
    //   console.log("Favorite Button CLicked")
    //   create({favorited:true})
    //   // evt.preventDefault()
    //   // $("body").css("background", "blue")
    //   // $.getJSON() 
    //   //     var url = "/favorites";
    //   //     var request = $.ajax({
    //   //       url: url,
    //   //       method: "post",
    //   //       data: JSON.stringify(favoriteData),
    //   //       contentType: "application/json"
    //   //     })
    //   //     .then(function(favoriteData){
    //   //       return new Favorite(favoriteData);   //Maybe include some error handling
    //   //     })
    //   //     return request; 
    // } )

    // create = function(favoriteData){
      //  console.log("In creae function")
      //   var self = this;
      //   var url = "/favorites";
      //   var request = $.ajax({
      //     url: url,
      //     method: "post",
      //     data: JSON.stringify(favoriteData),
      //     contentType: "application/json"
      //   })
      //   .then(function(favoriteData){
      //     return new Favorite(favoriteData);   //Maybe include some error handling
      //   })
      //   return request;
      // // };
})

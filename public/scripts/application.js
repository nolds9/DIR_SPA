$(document).ready(function(){

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
    // Show selected result's info and poster
    show:   function(imdbId) {
      if (!imdbId) return;

      var url = 'http://www.omdbapi.com/?i='+imdbId;

      $.getJSON(url).then(function(imdbMovieData) {
        var detail = '<h2>' + imdbMovieData.Title + '</h2>';
        detail += '<img src="'+ imdbMovieData.Poster +'" alt="'+ imdbMovieData.Title +'">';
        $('#movie-detail').html(detail);
      });
    },
    // Send ajax post request to favorites
    favorite: function(movie){
        var self = this;
        var url = "/favorites";
        var request = $.ajax({
          url: url,
          method: "post",
          data: JSON.stringify(movie),
          contentType: "application/json"
        })
        .then(function(movie){
         return new Favorite(movie);   //Maybe include some error handling
        })
        return request;
    },
    // Ajax request to get all favorites
    getFavorites: function(){  
        var request = $.getJSON("/favorites")
        .then(function(response){
          var favorites = [];
          for (var i = 0; i < response.length; i++){
            favorites.push(new Favorite(response[i]));
            $(".favorites").append("<p>"+ response[i].title + "</p>")
          };
           $(".favorites").prepend("<h3> Favorited Movies</h3>")

          return favorites;
        })
        .fail(function(response){
          console.log("failed to fetch favorites");
        });
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
      $("#favoriteB").on("click", function(movie){
       movieTitle = $("h2").text()
       movieBrowser.favorite({title: movieTitle, favorited: true})
    })  

    // list favorites 
      $("#showFavorites").on("click", function(favorite){
        movieBrowser.getFavorites()
      })
})

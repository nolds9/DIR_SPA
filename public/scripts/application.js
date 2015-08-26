$(document).ready(function(){
  // Define movie browser as an object
  var movieBrowser = {
    //query OMDB with keyword
    search:  function (keyword) {
        var self = this;
        var url = 'http://www.omdbapi.com/?s='+escape(keyword);

        $.getJSON(url)
        .done(function(imdbResponse){

          self.imdbDone(keyword, imdbResponse);
        })
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

})

![GA Logo](https://raw.github.com/generalassembly/ga-ruby-on-rails-for-devs/master/images/ga.png)

## GA-DC DIR Code Challenge
> Challenge was to create a single page application that will utilize an external API to request movie data. The client side application will be served by a back-end which will have the ability to persist data.

### Movie Brows.r

### User Stories
- The page should have a form that uses the [OMDBapi](http://www.omdbapi.com/) to search for matching movies and then display the results.
 - *Example*: If a user searches for `Star Wars`, a list of every Star Wars movie will be displayed.

- When the user clicks on a search result display detailed information about that movie.
  - *Example*: If a user is viewing a list of every Star Wars movie and clicks on `Star Wars: A New Hope`, detailed information about that specific movie will be displayed.

- Users should be able to "favorite" a movie and have it persisted via the provided back-end.

- Provide a link to display favorited movies.

### Notes:
- Decided to use Node.js back-end to build an Express app with Sequelize and Postgres, and to polish OOJS skills.
- Machincal Failure and timebox constraints forced this version to fall into the "Bronze" class of MVPs.

#### Version 1: "Bronze"
- v1.0's back-end contains a single model, "Favorite"
- v1.0's front-end is a single file which utilizes OOJS, along with Jquery and AJAX to build an app that meets requirements.
- v1.0's CSS is minimal 

#### Version 2: "Silver"
- v2.0's back-end will contain another model, users, and will have a has many relationship with favorites
- v2.0's back-end will store user associated favorites accross sessions
- v2.0's back-end models will have full CRUD ability
- v2.0's front-end will be abstracted into MV*  paradigm 
- v2.0's front-end will contain either a front-end framework to work with CSS or for templating

#### Version : "Gold"
- v3.0's back-end is a multi-model full CRUD api that includes full user-authentication via O-Auth or handroll
- v3.0's back-end incorporates external api's to pull other relevant outside info or reviews for results
- v3.0's authenticated users have the ability to comment/review or share results/favorites
- v3.0's front-end is constructed utilizing front-end framework and/or JavaScript MVC library.
- v3.0's CSS and UI are on-point and app is responsive


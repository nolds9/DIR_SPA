//Connect Sequelize with Postgres
var Sequelize = require("sequelize");


if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  });
} else {
  // the application is executed on the local machine
  var sequelize = new Sequelize("postgres:///dir_spa_db");
  // var sequelize = new Sequelize('postgres://nolds:password@localhost:5432/dir_spa_db')
}





// import Favorite Model
var Favorite = sequelize.import("../app/models/favorite");

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: { Favorite: Favorite}
}

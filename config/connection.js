//Connect Sequelize with Postgres
var Sequelize = require("sequelize");
// var sequelize = new Sequelize("postgres:///dir_spa_db");
// var sequelize = new Sequelize('postgres://nolds:password@localhost:5432/dir_spa_db')
var sequelize = new Sequelize('postgres://philip:password@localhost:5432/dir_spa_db')

// import Favorite Model
var Favorite = sequelize.import("../app/models/favorite");

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: { Favorite: Favorite}
}

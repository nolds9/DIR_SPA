// Sequelize Model 'Favorite'
module.exports = function(sequelize, Sequelize){
  return sequelize.define("favorite", {
    title: Sequelize.STRING,
    favorited: Sequelize.BOOLEAN
  });
}

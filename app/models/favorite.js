// Sequelize Model 'Model'
module.exports = function(sequelize, Sequelize){
  return sequelize.define("favorite", {
    title: Sequelize.STRING,
  });
}

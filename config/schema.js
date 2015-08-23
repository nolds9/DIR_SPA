var DB = require("./connection");

DB.do.sync({force: true}).then(function(){
  console.log("Schema Loaded");
  process.exit();
});

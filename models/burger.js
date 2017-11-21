// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(id, devoured, cb) {
    var 
    orm.update("burgers", cols, )
    };
  }

  
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;


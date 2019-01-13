// Contains boilerplate code to handle user input from front end (which is sent through burgers_controller.js)
// and sends it to orm so request can be understood by MySQL. MySQL is then read/updated accordingly.


//Import the ORM to create functions that will interact with the database
var orm = require("../Config/orm.js");

//Code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    all: function (cb) {                                    
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // Posts to 'burgers' table
    // Cols and vals are array variables
    create: function (burgerName, cb) {
        orm.insertOne(burgerName, function (res) {
            cb(res);
        });
    },

    update: function (idNumber, cb) {
        orm.updateOne(idNumber, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
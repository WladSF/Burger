//Import(require) MySQL connection (connection.js) into orm.js
//=========================================
var connection = require("../Config/connection.js");




var orm = {


    // Select All Function
    //________________________________
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            } 
            cb(result);
        });
    },

    // Insert One Function
    //________________________________
    insertOne: function(burgerName, cb) { // Probably needs logic on orms.js side to parse input into MySQL format
        // Code here
        var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "');";
        console.log(burgerName);
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        })
    },

    // Update One Function
    //________________________________
    updateOne: function(idNumber, cb) {
        var queryString = "UPDATE burgers SET devoured = NOT 0 WHERE id = " + idNumber + ";"
    
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
              }
              cb(result);
        })
    }
  };

//Export the ORM object 
//======================

module.exports = orm;
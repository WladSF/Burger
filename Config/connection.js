//Code to connect NODE to MYSQL
//=============================

var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user: "root",
    password: "password",
    databse: "burgers_db"
});

connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId)
});

//Exporting the connection
//==============================

module.exports = connection;


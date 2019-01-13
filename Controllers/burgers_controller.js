var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../Models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var showBurgers = {
        burgers: data
      };
      console.log(showBurgers);
      res.render("index", showBurgers);
    });
});
router.get("/api/burger_data", function(req, res) {
    burger.all(function(data) {
      var showBurgers = {
        burgers: data
      };
      console.log(showBurgers);
      res.json(showBurgers);
    });
});
  
router.post("/api/burgers/", function(req, res) {

    burger.create([
      req.body.burger_name
    ], function(result) {
      res.json({ id: result.insertId });
    });
});
  
router.put("/api/burgers/:id", function(req, res) {
    var eatenBurgerID = req.params.id
    var condition = eatenBurgerID;
  
    console.log(condition);
  
    burger.update(condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        console.log("Result: " + result)
        res.status(200).end();
        res.status(200).end();
      }
    });
});
  

// Export routes for server.js to use.
module.exports = router;
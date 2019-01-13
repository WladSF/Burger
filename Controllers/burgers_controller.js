var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../Models/burger.js");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//     burger.all(function (data) {
//         var displayBurgers = {
//             burgers: data
//         };
//         console.log(displayBurgers);
//         res.render("index", displayBurgers);
//     });
// });

// router.post("/api/burgers", function (req, res) {
//     burger.create([req.body.burger_name], function (result) {
        // Send back the ID of the new quote
//         res.json({ id: result.insertId });
//     });
// });

// router.put("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.update(condition, function (result) {
//         if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             console.log("Result: " + result)
//             res.status(200).end();
//         }
//     });
// });

// Selects * From 'burgers' Table
//________________________________
router.get("/", function(req, res) {
    burger.all(function(data) {
      var showBurgers = {
        burgers: data
      };
      console.log(showBurgers);
      res.render("index", showBurgers);
    });
});


// Shows 'burgers' Table In JSON Format
//________________________________
router.get("/api/burger_data", function(req, res) {
    burger.all(function(data) {
      var showBurgers = {
        burgers: data
      };
      console.log(showBurgers);
      res.json(showBurgers);
    });
});
  

// Posts To 'burgers' Table
//________________________________
router.post("/api/burgers/", function(req, res) {

    burger.create([
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new Burger???
      res.json({ id: result.insertId });
    });
});
  


// Switches 'devoured' In 'burgers' Table To True
//________________________________
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
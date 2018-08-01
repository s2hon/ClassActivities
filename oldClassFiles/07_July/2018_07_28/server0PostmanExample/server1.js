// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

var obiWanKenobi = {
  name: "obiWanKenobi",
  role: "Jedi Master",
  age: 60,
  forcePoints: 1300
};

// Create one more data entry for the character Obi Wan Kenobi. (dont use spaces for now!)
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//
var listOfJedis = [yoda, darthmaul, obiWanKenobi]
// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("<h1>Welcome to the Star Wars Page!</h1><br><p><a href='/yoda'>yoda</a> | <a href='/darthmaul'>darthmaul</a> | <a href='/obiWanKenobi'>obiWanKenobi</a></p>");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});

app.get("/obiWanKenobi", function(req, res) {
  res.json(obiWanKenobi);
});

 
// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

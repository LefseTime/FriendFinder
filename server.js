// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var friends = require("./data/friends");
//var apiRoutes = require("./app/routing/apiRoutes");
//var htmlRoutes = require("./app/routing/htmlRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
// =============================================================

function htmlRoutes() {
    // * A GET Route to `/survey` which should display the survey page.
    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    });

    // * A default, catch-all route that leads to `home.html` which displays the home page. 
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    });
};
htmlRoutes();
//apiRoutes();

let users = [
    {
        "name": "La Croix Boi",
        "photo": "https://media.npr.org/assets/img/2017/06/01/screen-shot-2017-06-01-at-11.45.45-am_wide-aafc831c1f41f975a1b1a8626ba6d88afb27b112.jpg?s=1400",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];

app.get("/api/friends", function (req, res) {
    return res.json(users);
});

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newUser = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newUser);
  
    users.push(newUser);
  
    res.json(newUser);
  });



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
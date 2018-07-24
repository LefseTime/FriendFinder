// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var fs = require("fs");
//var friends = require("./app/data/friends");
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

//users list
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
        ],
        "comparison": 0
    },
    {
        "name": "Jeff Goldblum",
        "photo": "http://1.bp.blogspot.com/-7fLZDYzMvJI/UlRMx9JneuI/AAAAAAAAAXI/tGqDEuxJsJw/s1600/ian+malcolm.jpg",
        "scores": [
            5,
            5,
            5,
            2,
            3,
            4,
            1,
            1,
            2,
            5
        ],
        "comparison": 0
    }
];

//survey page
app.get("/survey.html", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

//home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

//json friends/users list
app.get("/api/friends", function (req, res) {
    return res.json(users)
});

// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
// takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newUser = req.body;

    users.push(newUser);

    //console.log(users)
    for (let i = 0; i < users.length - 1; i++) {
        let userScores = users[i].scores;
        //console.log(userScores);
        users[i].comparison = 0;
        let bestComparison = users[0].comparison;
        for (let j = 0; j < userScores.length; j++) {
            //console.log(newUser.scores[j])
            users[i].comparison = users[i].comparison + Math.abs(userScores[j] - newUser.scores[j]);
        }
        console.log(bestComparison)
        // if (users[i].comparison < users[i-1].comparison) {
        //     bestComparison = users[i].comparison
        // }
        // else {
        //     bestComparison = users[i-1].comparison
        // }
    }

    res.json(newUser);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
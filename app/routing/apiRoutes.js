// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
module.exports = function apiRoutes(app,friends) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
    // takes in JSON input
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
    
};

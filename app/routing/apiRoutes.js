// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
function apiRoutes() {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
    // takes in JSON input
    app.post("/api/friends", function (req, res) {
        
        var newUser = req.body;

        console.log("new user ", newUser);

        tables.push(newUser);

        res.json(newUser);
    });
};

module.exports = apiRoutes;
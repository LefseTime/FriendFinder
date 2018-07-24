module.exports = function (app,path) {
    // * A GET Route to `/survey` which should display the survey page.
    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../../app/public/survey.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../../app/public/home.html"));
    });

    // css?
    // * A default, catch-all route that leads to `home.html` which displays the home page. 
    // app.get("/main.css", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../../app/public/main.css"));
    // });
    // app.get("/main.css", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../../app/public/main.css"));
    // });
};
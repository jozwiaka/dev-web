const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const Mode = require(__dirname + "/Mode.js");
const ModeController = require(__dirname + "/ModeController.js");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // /public/

const port = 3000;
//--------------------------------------------------------- 
//--------------------------------------------------------- 
let modeController = new ModeController();
modeController.addMode(new Mode(date.today(), ["Learn JS", "Learn Python"]));
modeController.addMode(new Mode("Work", ["Update Jira", "Respond to mail"]));

let item = "";
let mode = modeController.modes[0];
//--------------------------------------------------------- 
//--------------------------------------------------------- 
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port " + port);
});

app.get("/", (req, res) => {
    modeController.modes[0].title = date.today();
    mode = modeController.modes[0];
    res.redirect(mode.route);
});

app.post("/", (req, res) => {
    item = req.body.newItem.trim();
    if (item != '') {
        mode.items.push(item);
    }
    res.redirect(mode.route);
});

app.post("/newMode", (req, res) => {
    newMode = req.body.newMode.trim();
    if (newMode != '') {
        modeController.addMode(new Mode(req.body.newMode));
    }
    res.redirect(mode.route);
});

app.post("/modeSubmit", (req, res) => {
    mode = modeController.getMode(req.body.modeTitle);
    res.redirect(mode.route)
});

function setRoute(req, res, next) {
    req.route = mode.route;
    next();
}

app.get("/:route", setRoute, (req, res) => {
    res.render("list", {
        modesIds: modeController.getModesIds(),
        modeId: mode.id,
        modesTitles: modeController.getTitles(),
        modeTitle: mode.title,
        modeItems: mode.items
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

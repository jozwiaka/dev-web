// node calculator.js
// nodemon calculator.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log("Server started on port " + port)
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/response", (req, res) => {
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var result = n1 + n2;
    res.send(n1 + " + " + n2 + " = " + result + "<br><br>" + "<a href=\"/\">Return</a>");
});
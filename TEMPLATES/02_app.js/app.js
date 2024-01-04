
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port " + port);
});
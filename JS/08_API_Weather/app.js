const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/weather", (req, res1) => {
    const query = req.body.cityName
    const apiKey = "5147f7869a213c68379478f9e8b76b22"
    const unit = "metric"; //celcius
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, (res2) => {
        console.log(res2.statusCode.toString());

        // func will be called whenever the data event will be triggered - when new data is available to be read from the res2 
        res2.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const T = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;

            res1.write("<p>The weather is currently <b>" + weatherDescription + "</b></p>");
            res1.write("<p>The temperature in <b>" + query + "</b> is <b>" + T + "</b> degrees Celcius</p>");
            res1.write("<img src=\"https://openweathermap.org/img/wn/" + icon + "@2x.png\">");
            res1.write("<br><br>")
            res1.write("<a href=\"/\">Return</a>")
            res1.send()
        });
    });
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

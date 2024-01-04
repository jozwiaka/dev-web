
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req1, res1) => {
    const fName = req1.body.fName;
    const lName = req1.body.lName;
    const email = req1.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                },
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us12.api.mailchimp.com/3.0/lists/cdfce6ac67"
    const options = {
        method: "POST",
        auth: "JozwiakA:523f85b38fdb4b2016fc2010621c933a-us12"
    };
    const req2 = https.request(url, options, (res2) => {
        const status = res2.statusCode;
        if (status === 200) {
            res1.sendFile(__dirname + "/success.html")
        }
        else {
            res1.sendFile(__dirname + "/failure.html")
        }

        res2.on("data", (data) => {
            console.log(JSON.parse(data));
        });
    });

    req2.write(jsonData)
    req2.end();
    console.log(fName, lName, email);
});

app.post("/failure", (req, res) => {
    res.redirect("/");
})
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port " + port);
});


//List Id
// cdfce6ac67

//API Key
// 523f85b38fdb4b2016fc2010621c933a-us12


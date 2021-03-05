const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

// post request
app.post("/contact-form", (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send("Thank you for submitting your contact form.");
});

app.use(express.static(path.join(__dirname, "../public")));

// this is how to turn the server on
app.listen(3000);

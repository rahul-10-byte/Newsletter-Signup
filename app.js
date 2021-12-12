// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

    console.log(firstName, lastName, email);
});


app.listen(3000, function () {
    console.log("Server started at 3000!!");
});
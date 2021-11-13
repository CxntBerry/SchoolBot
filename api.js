const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function (link) {
    console.log("Server is running on localhost3000");
    var Answers = {}; //an array of answers to return
    return Answers
});
